// rate_limits.entity.ts
import { Column, Entity, Index, ManyToOne, Relation } from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { BaseEntity } from './base';

@Entity({ name: 'rate_limits' })
export class RateLimit extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne(() => AdAccount, (aa) => aa.rate_limits)
  ad_account: Relation<AdAccount>;

  @Column({ type: 'timestamptz' })
  window_start: Date;

  @Column({ type: 'int', default: 0 })
  calls: number;
}
