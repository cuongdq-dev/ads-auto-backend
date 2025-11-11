// ads.entity.ts
import { Column, Entity, Index, ManyToOne, OneToMany, Relation } from 'typeorm';
import { AdSet } from './ad_set.entity';
import { BaseEntity } from './base';
import { Creative } from './creatives.entity';
import { Insight } from './insights.entity';

@Entity({ name: 'ads' })
export class Ad extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_set_id: string;

  @ManyToOne(() => AdSet, (as) => as.ads)
  ad_set: Relation<AdSet>;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  status?: string;

  @Column({ type: 'uuid', nullable: true })
  creative_id?: string;

  @ManyToOne(() => Creative, (c) => c.ads, { nullable: true })
  creative?: Relation<Creative>;

  @Column({ type: 'text', nullable: true })
  preview_url?: string;

  @Column({ type: 'jsonb', nullable: true })
  raw?: any;

  @OneToMany(() => Insight, (ins) => ins.ad)
  insights?: Relation<Insight[]>;
}
