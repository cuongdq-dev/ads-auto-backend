import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'ad_action_logs' })
export class AdActionLog extends BaseEntity {
  @Column({ type: 'uuid', nullable: true })
  @Index()
  user_id?: string;

  @Column({ type: 'uuid', nullable: true })
  @Index()
  ad_account_id?: string;

  @Column({ type: 'varchar', length: 128 })
  action: string;

  @Column({ type: 'jsonb', nullable: true })
  payload?: any;

  @Column({ type: 'varchar', length: 32 })
  result_status: 'success' | 'fail' | 'queued';

  @Column({ type: 'text', nullable: true })
  error_message?: string;

  @Column({ type: 'jsonb', nullable: true })
  meta?: any;
}
