import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'token_refresh_logs' })
export class TokenRefreshLog extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  meta_token_id: string;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  attempt_at: Date;

  @Column({ type: 'boolean' })
  success: boolean;

  @Column({ type: 'jsonb', nullable: true })
  response?: any;

  @Column({ type: 'text', nullable: true })
  error_message?: string;
}
