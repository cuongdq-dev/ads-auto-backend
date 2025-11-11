import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'creatives' })
export class Creative extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  type?: string;

  @Column({ type: 'text', nullable: true })
  url?: string;

  @Column({ type: 'jsonb', nullable: true })
  meta?: any;
}
