import { ProblemaDto } from './dto/create-problema-dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProblemaService } from './problema.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';


@Controller('problemas')
export class ProblemaController {
  constructor(private readonly problemaService : ProblemaService) {}

  @Post()
  async posProblema(@Body() data : ProblemaDto, @CurrentUser() user : User){
    return this.problemaService.postProblema(data , user.id);
  }

  @IsPublic()
  @Get()
  async getProblemas(){
    return this.problemaService.getProblemas();
  }

  @IsPublic()
  @Get('cordenadas')
  async getProblemaCordenada(@Body() getEnderecoDto : GetEnderecoDto){
    return this.problemaService.getEnderecoCordenada(getEnderecoDto)
  }
}
