import { ProblemaDto } from './dto/create-problema-dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProblemaService } from './problema.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';


@Controller('api/v1/problemas')
export class ProblemaController {
  constructor(private readonly problemaService : ProblemaService) {}

  @Post()
  async posProblema(@Body() data : ProblemaDto){
    return this.problemaService.postProblema(data);
  }

  @Get()
  async getProblemas(){
    return this.problemaService.getProblemas();
  }

  @Get('tipo/:tipo')
  async getProblemaPorTipo(@Param('tipo') tipo : String){
      return this.problemaService.getProblemaPorTipo(tipo);
  }

  @Get('nivel/:nivelGravidade')
  async getProblemaPorNivelGravidade(@Param('nivelGravidade') nivelGravidade : number){
      return this.problemaService.getProblemaPorNivelGravidade(nivelGravidade)
  }

  @Get('cordenadas')
  async getProblemaCordenada(@Body() getEnderecoDto : GetEnderecoDto){
    return this.problemaService.getEnderecoCordenada(getEnderecoDto)
  }
}
