// ad_set.entity.ts
import { Column, Entity, Index, ManyToOne, OneToMany, Relation } from 'typeorm';
import { Ad } from './ads.entity';
import { BaseEntity } from './base';
import { Campaign } from './campaign.entity';
import { Insight } from './insights.entity';

@Entity({ name: 'ad_sets' })
export class AdSet extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  campaign_id: string;

  @ManyToOne(() => Campaign, (c) => c.ad_sets)
  campaign: Relation<Campaign>;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  status?: string;

  @Column({ type: 'jsonb', nullable: true })
  targeting?: any;

  @Column({ type: 'varchar', length: 64, nullable: true })
  bid_strategy?: string;

  @Column({ type: 'bigint', nullable: true })
  budget_amount?: number;

  @Column({ type: 'timestamptz', nullable: true })
  start_time?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  end_time?: Date;

  @Column({ type: 'jsonb', nullable: true })
  raw?: any;

  @OneToMany(() => Ad, (ad) => ad.ad_set)
  ads?: Relation<Ad[]>;

  @OneToMany(() => Insight, (ins) => ins.ad_set)
  insights?: Relation<Insight[]>;
}
