import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'meta_tokens' })
export class MetaToken extends BaseEntity {
  // Who uploaded / owns this token in your system
  @Column({ type: 'uuid', nullable: true })
  @Index()
  owner_user_id: string;

  @ManyToOne('AdAccount', { nullable: true })
  @Column({ type: 'uuid', nullable: true })
  @Index()
  ad_account_id: string;

  // Encrypted token - AES-GCM style
  @Column({ type: 'text' })
  token_ciphertext: string;

  @Column({ type: 'varchar', length: 128 })
  token_iv: string;

  @Column({ type: 'varchar', length: 128 })
  token_tag: string;

  // fingerprint for quick lookup (sha256 hex)
  @Column({ type: 'varchar', length: 128, nullable: true })
  token_fingerprint?: string;

  // refresh token encrypted (optional)
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
}
