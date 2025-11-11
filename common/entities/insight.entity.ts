import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'insights' })
export class Insight extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

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
}
