// token_refresh_logs.entity.ts
import { Column, Entity, Index, ManyToOne, Relation } from 'typeorm';
import { BaseEntity } from './base';
import { MetaToken } from './meta_token.entity';

@Entity({ name: 'token_refresh_logs' })
export class TokenRefreshLog extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  meta_token_id: string;

  @ManyToOne(() => MetaToken, (mt) => mt.refresh_logs)
  meta_token: Relation<MetaToken>;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  attempt_at: Date;

  @Column({ type: 'boolean' })
  success: boolean;

  @Column({ type: 'jsonb', nullable: true })
  response?: any;

  @Column({ type: 'text', nullable: true })
  error_message?: string;
}
