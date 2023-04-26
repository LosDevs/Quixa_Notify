import { PrismaService } from 'src/database/prisma.service';
import { ProblemaController } from './problema.controller';

import { Module } from '@nestjs/common';
import { ProblemaService } from './problema.service';



@Module({
  imports: [],
  controllers: [ProblemaController],
  providers: [ ProblemaService, PrismaService],
})
export class ProblemaModule {}