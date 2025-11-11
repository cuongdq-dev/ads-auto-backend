// user_ad_account.entity.ts
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { BaseEntity } from './base';
import { MetaToken } from './meta_token.entity';
import { User } from './user.entity';

@Entity({ name: 'user_ad_accounts' })
export class UserAdAccount extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  user_id: string;

  @ManyToOne(() => User, (u) => u.user_ad_accounts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne(() => AdAccount, (aa) => aa.user_ad_accounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ad_account_id' })
  ad_account: Relation<AdAccount>;

  @Column({ type: 'uuid', nullable: true })
  meta_token_id?: string;

  @ManyToOne(() => MetaToken, (mt) => mt.assigned_user_accounts, {
    nullable: true,
  })
  @JoinColumn({ name: 'meta_token_id' })
  meta_token?: Relation<MetaToken>;

  @Column({ type: 'varchar', length: 32, default: 'editor' })
  role: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'uuid', nullable: true })
  assigned_by_admin_id?: string;
}
