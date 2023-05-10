import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator";

export class ProblemaDto {
    @IsNotEmpty({message : "O Titulo não deve ser vazio."})
    @Length(3,30)
    titulo: String;

    @IsNotEmpty({message : "O longitude não deve ser vazio."})
    @Length(3,30)
    longitude: String;
    
    @IsNotEmpty({message : "O latitude não deve ser vazio."})
    @Length(3,30)
    latitude: String;

    @IsNotEmpty({message : "O endereço não deve ser vazio."})
    @Length(3,50)
    endereco: String;

    @IsNotEmpty({message : "O tipo de problema não deve ser vazio."})
    @Length(3,30)
    tipo_problema: String;
    @IsNotEmpty()
    nivel_gravidade: number;
    @IsNotEmpty()
    votacao: number;

    imagem: String;


}