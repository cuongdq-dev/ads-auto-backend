// campaign.entity.ts
import { Column, Entity, Index, ManyToOne, OneToMany, Relation } from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { AdSet } from './ad_set.entity';
import { BaseEntity } from './base';
import { Insight } from './insights.entity';

@Entity({ name: 'campaigns' })
export class Campaign extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne(() => AdAccount, (aa) => aa.campaigns)
  ad_account: Relation<AdAccount>;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  objective?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  status?: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  budget_type?: string;

  @Column({ type: 'bigint', nullable: true })
  budget_amount?: number;

  @Column({ type: 'timestamptz', nullable: true })
  start_time?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  end_time?: Date;

  @Column({ type: 'jsonb', nullable: true })
  raw?: any;

  @OneToMany(() => AdSet, (as) => as.campaign)
  ad_sets?: Relation<AdSet[]>;

  @OneToMany(() => Insight, (ins) => ins.campaign)
  insights?: Relation<Insight[]>;
}
