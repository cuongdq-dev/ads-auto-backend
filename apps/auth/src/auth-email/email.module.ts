import { User } from '@app/entities';
import { FirebaseModule } from '@app/modules/firebase/firebase.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  imports: [
    TokenModule,
    AuthModule,
    FirebaseModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailAuthModule {}
