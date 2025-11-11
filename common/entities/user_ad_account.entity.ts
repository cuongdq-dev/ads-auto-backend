import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import type { AdAccount } from './ad_account.entity';
import { BaseEntity } from './base';
import type { MetaToken } from './meta_token.entity';
import type { User } from './user.entity';

@Entity({ name: 'user_ad_accounts' })
export class UserAdAccount extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  user_id: string;

  @ManyToOne('User', 'user_ad_accounts', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne('AdAccount', 'user_ad_accounts', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_account_id' })
  ad_account: Relation<AdAccount>;

  // assigned token id (nullable)
  @Column({ type: 'uuid', nullable: true })
  meta_token_id?: string;

  @ManyToOne('MetaToken', { nullable: true })
  @JoinColumn({ name: 'meta_token_id' })
  meta_token?: Relation<MetaToken>;

  @Column({ type: 'varchar', length: 32, default: 'editor' })
  role: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;
}
