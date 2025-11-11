// insights.entity.ts
import { Column, Entity, Index, ManyToOne, Relation } from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { AdSet } from './ad_set.entity';
import { Ad } from './ads.entity';
import { BaseEntity } from './base';
import { Campaign } from './campaign.entity';

@Entity({ name: 'insights' })
export class Insight extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne(() => AdAccount, (aa) => aa.insights)
  ad_account: Relation<AdAccount>;

  @Column({ type: 'varchar', length: 16 })
  object_type: 'campaign' | 'adset' | 'ad';

  @Column({ type: 'varchar', length: 64 })
  object_external_id: string;

  @Column({ type: 'date' })
  date_start: string;

  @Column({ type: 'date' })
  date_end: string;

  @Column({ type: 'jsonb' })
  metric_data: any;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  fetched_at: Date;

  @ManyToOne(() => Campaign, (c) => c.insights, { nullable: true })
  campaign?: Relation<Campaign>;

  @ManyToOne(() => AdSet, (as) => as.insights, { nullable: true })
  ad_set?: Relation<AdSet>;

  @ManyToOne(() => Ad, (ad) => ad.insights, { nullable: true })
  ad?: Relation<Ad>;
}
