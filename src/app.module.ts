import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { ProblemaModule } from './problema/problema.module';



@Module({
  imports: [ProblemaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
