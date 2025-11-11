import { ValidationGroup } from '@app/crud/validation-group';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  Relation,
  Unique,
} from 'typeorm';
import { BaseEntity } from './base';
import { UserRole } from './user_roles.entity';
import type { Session } from './user_session.entity';
import { Token } from './user_token.entity';

@Entity({ name: 'users' })
@Unique(['name', 'email'])
export class User extends BaseEntity {
  @ApiProperty({ example: 'Danimai' })
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ApiProperty({ example: 'example@danimai.com' })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @ApiHideProperty()
  @Column({ type: 'boolean', default: false })
  emailVerified: boolean;

  @ApiProperty({ example: 'Danimai' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  displayName: string;

  @ApiProperty({ example: 'Danimai' })
  @Column({ type: 'text', nullable: true })
  photoUrl: string;

  @ApiHideProperty()
  @Column({ type: 'boolean', default: false })
  is_active: boolean;

  @ApiProperty({ example: 'Password@123' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  @Exclude()
  password: string;

  @ApiHideProperty()
  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];

  @Column({ type: 'text', nullable: true })
  @IsOptional({ groups: [ValidationGroup.UPDATE] })
  firebase_token: string;

  @ApiHideProperty()
  @Exclude()
  previousPassword: string;

  @ApiHideProperty()
  @OneToMany('Session', 'user')
  sessions: Relation<Session[]>;

  @OneToMany(() => UserRole, (ur) => ur.user)
  user_roles: UserRole[];

  @Column({ nullable: true })
  firebase_uid: string;

  @AfterLoad()
  storePasswordInCache() {
    this.previousPassword = this.password;
  }

  @Column({ type: 'text', nullable: true })
  @ApiHideProperty()
  meta_token: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (this.previousPassword !== this.password && this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
    this.email = this.email.toLowerCase();
  }

  comparePassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}
