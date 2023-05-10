import { ProblemaDto } from './dto/create-problema-dto';
import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProblemaService } from './problema.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


@Controller('problemas')
export class ProblemaController {
  constructor(private readonly problemaService : ProblemaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imagem',{
    storage : diskStorage ({
      destination : './files',
      filename(req, file, callback) {
          const UniqueSufix = 
              Date.now() + - + Math.round(Math.random() * 1e9)
              const ext = extname(file.originalname)
              const filename = `${UniqueSufix}${ext}`;
            callback(null, filename);
      },
    })
  }))
  async posProblema(@Body() data : ProblemaDto, @CurrentUser() user : User, @UploadedFile() file : Express.Multer.File){
    console.log('file', file);
    return this.problemaService.postProblema(data , user.id, file);
  }

  @IsPublic()
  @Get(':img')
  async getImagem(@Param('img') img, @Res() res){
    return res.sendFile(img, {root : 'files'})
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
