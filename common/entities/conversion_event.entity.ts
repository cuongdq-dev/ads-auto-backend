import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'conversion_events' })
export class ConversionEvent extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @Column({ type: 'varchar', length: 128 })
  event_name: string;

  @Column({ type: 'timestamptz' })
  event_time: Date;

  @Column({ type: 'jsonb', nullable: true })
  payload: any;

  @Column({ type: 'varchar', length: 255, nullable: true })
  dedup_key?: string;

  @Column({ type: 'boolean', default: false })
  sent: boolean;

  @Column({ type: 'jsonb', nullable: true })
  response?: any;
}
