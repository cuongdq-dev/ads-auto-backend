// ad_account.entity.ts
import { Column, Entity, Index, OneToMany, Relation } from 'typeorm';
import { BaseEntity } from './base';
import { Campaign } from './campaign.entity';
import { ConversionEvent } from './conversion_event.entity';
import { Creative } from './creatives.entity';
import { Insight } from './insights.entity';
import { MetaToken } from './meta_token.entity';
import { RateLimit } from './rate_limits.entity';
import { UserAdAccount } from './user_ad_account.entity';

@Entity({ name: 'ad_accounts' })
export class AdAccount extends BaseEntity {
  @Index()
  @Column({ type: 'varchar', length: 64, unique: true })
  account_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  display_name: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  currency: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  timezone: string;

  @OneToMany(() => Campaign, (c) => c.ad_account)
  campaigns?: Relation<Campaign[]>;

  @OneToMany(() => MetaToken, (mt) => mt.ad_account)
  meta_tokens?: Relation<MetaToken[]>;

  @OneToMany(() => UserAdAccount, (uaa) => uaa.ad_account)
  user_ad_accounts?: Relation<UserAdAccount[]>;

  @OneToMany(() => ConversionEvent, (ce) => ce.ad_account)
  conversion_events?: Relation<ConversionEvent[]>;

  @OneToMany(() => Creative, (cr) => cr.ad_account)
  creatives?: Relation<Creative[]>;

  @OneToMany(() => Insight, (ins) => ins.ad_account)
  insights?: Relation<Insight[]>;

  @OneToMany(() => RateLimit, (rl) => rl.ad_account)
  rate_limits?: Relation<RateLimit[]>;
}
