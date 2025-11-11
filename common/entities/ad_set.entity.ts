import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'ad_sets' })
export class AdSet extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  campaign_id: string;

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
}
