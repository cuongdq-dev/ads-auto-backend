// meta_token.entity.ts
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { BaseEntity } from './base';
import { TokenRefreshLog } from './token_refresh_log.entity';
import { User } from './user.entity';
import { UserAdAccount } from './user_ad_account.entity';

@Entity({ name: 'meta_tokens' })
export class MetaToken extends BaseEntity {
  @Column({ type: 'uuid', nullable: true })
  @Index()
  owner_user_id: string;

  @ManyToOne(() => User, (u) => u.owned_tokens, { nullable: true })
  @JoinColumn({ name: 'owner_user_id' })
  owner_user?: Relation<User>;

  @ManyToOne(() => AdAccount, (aa) => aa.meta_tokens, { nullable: true })
  @JoinColumn({ name: 'ad_account_id' })
  ad_account?: Relation<AdAccount>;

  @Column({ type: 'text' })
  token_ciphertext: string;

  @Column({ type: 'varchar', length: 128 })
  token_iv: string;

  @Column({ type: 'varchar', length: 128 })
  token_tag: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  token_fingerprint?: string;

  @Column({ type: 'text', nullable: true })
  refresh_token_ciphertext?: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  refresh_token_iv?: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  refresh_token_tag?: string;

  @Column({ type: 'text', nullable: true })
  scopes?: string;

  @Column({ type: 'timestamptz', nullable: true })
  expires_at?: Date;

  @Column({ type: 'boolean', default: false })
  revoked: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  last_used_at?: Date;

  @OneToMany(() => TokenRefreshLog, (log) => log.meta_token)
  refresh_logs?: Relation<TokenRefreshLog[]>;

  @OneToMany(() => UserAdAccount, (uaa) => uaa.meta_token)
  assigned_user_accounts?: Relation<UserAdAccount[]>;
}
