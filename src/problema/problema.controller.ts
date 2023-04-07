import { ProblemaDto } from './dto/create-problema-dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProblemaService } from './problema.service';


@Controller()
export class ProblemaController {
  constructor(private readonly problemaService : ProblemaService) {}

  @Post()
  async getHello(@Body() data : ProblemaDto){
    return this.problemaService.postProblema(data);
  }
}
