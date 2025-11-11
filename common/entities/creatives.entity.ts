// creatives.entity.ts
import { Column, Entity, Index, ManyToOne, OneToMany, Relation } from 'typeorm';
import { AdAccount } from './ad_account.entity';
import { Ad } from './ads.entity';
import { BaseEntity } from './base';

@Entity({ name: 'creatives' })
export class Creative extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_account_id: string;

  @ManyToOne(() => AdAccount, (aa) => aa.creatives)
  ad_account: Relation<AdAccount>;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  type?: string;

  @Column({ type: 'text', nullable: true })
  url?: string;

  @Column({ type: 'jsonb', nullable: true })
  meta?: any;

  @OneToMany(() => Ad, (ad) => ad.creative)
  ads?: Relation<Ad[]>;
}
