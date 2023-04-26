import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { ProblemaModule } from './problema/problema.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';


@Module({
  imports: [ProblemaModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    PrismaService
  ],
})
export class AppModule {}
