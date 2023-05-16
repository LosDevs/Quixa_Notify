import { IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';

export class ProblemaDto {
  @IsNotEmpty({ message: 'O Titulo não deve ser vazio.' })
  @Length(3, 30)
  titulo: string;

  @IsNotEmpty({ message: 'O longitude não deve ser vazio.' })
  @Length(3, 100)
  longitude: string;

  @IsNotEmpty({ message: 'O latitude não deve ser vazio.' })
  @Length(3, 100)
  latitude: string;

  @IsNotEmpty({ message: 'O endereço não deve ser vazio.' })
  @Length(3, 50)
  endereco: string;

  @IsNotEmpty({ message: 'O tipo de problema não deve ser vazio.' })
  @Length(3, 30)
  tipo_problema: string;
  @IsNotEmpty()
  nivel_gravidade: number;
  @IsNotEmpty()
  votacao: number;

  @IsNotEmpty({message : "a descrição não pode ser vazio"})
  descricao : String

  imagem: string;
}
