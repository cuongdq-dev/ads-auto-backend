import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'rate_limits' })
export class RateLimit extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @Column({ type: 'timestamptz' })
  window_start: Date;

  @Column({ type: 'int', default: 0 })
  calls: number;
}
