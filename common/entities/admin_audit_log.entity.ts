import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'admin_audit_logs' })
export class AdminAuditLog extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  admin_user_id: string;

  @Column({ type: 'varchar', length: 128 })
  action: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  target_type?: string;

  @Column({ type: 'uuid', nullable: true })
  target_id?: string;

  @Column({ type: 'text', nullable: true })
  remarks?: string;

  @Column({ type: 'jsonb', nullable: true })
  meta?: any;
}
