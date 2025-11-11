import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity {
  @Column({ type: 'varchar', length: 64 })
  type: string;

  @Column({ type: 'uuid', nullable: true })
  @Index()
  recipient_user_id?: string;

  @Column({ type: 'jsonb', nullable: true })
  payload?: any;

  @Column({ type: 'varchar', length: 32, default: 'pending' })
  status: 'pending' | 'sent' | 'failed';

  @Column({ type: 'int', default: 0 })
  attempts: number;

  @Column({ type: 'timestamptz', nullable: true })
  last_attempt_at?: Date;
}
