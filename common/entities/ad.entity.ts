import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base';

@Entity({ name: 'ads' })
export class Ad extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  ad_set_id: string;

  @Column({ type: 'varchar', length: 64, unique: true, nullable: true })
  external_id?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  status?: string;

  @Column({ type: 'uuid', nullable: true })
  creative_id?: string;

  @Column({ type: 'text', nullable: true })
  preview_url?: string;

  @Column({ type: 'jsonb', nullable: true })
  raw?: any;
}
