import { configLoads } from '@app/modules';
import { TypeORMConfigFactory } from '@app/modules/database/typeorm.factory';
import { FirebaseModule } from '@app/modules/firebase/firebase.module';
import { MailerConfigClass } from '@app/modules/mail/mailerConfig.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as multer from 'multer';
import { EmailAuthModule } from './auth-email/email.module';
import { AuthModule } from './auth/auth.module';

const modules = [AuthModule, EmailAuthModule, FirebaseModule];

export const global_modules = [
  ConfigModule.forRoot({
    load: configLoads,
    isGlobal: true,
    envFilePath: ['.env'],
  }),
  TypeOrmModule.forRootAsync({ useClass: TypeORMConfigFactory }),
  MailerModule.forRootAsync({ useClass: MailerConfigClass }),
  MulterModule.register({
    storage: multer.memoryStorage(),
  }),
];

@Module({
  imports: [...global_modules, ...modules],
})
export class AuthModule {}
