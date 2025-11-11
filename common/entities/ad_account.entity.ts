import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'ad_accounts' })
export class AdAccount extends BaseEntity {
  @Index()
  @Column({ type: 'varchar', length: 64, unique: true })
  account_id: string; // Meta numeric id as string (e.g., "123456789")

  @Column({ type: 'varchar', length: 255, nullable: true })
  display_name: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  currency: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  timezone: string;
}
