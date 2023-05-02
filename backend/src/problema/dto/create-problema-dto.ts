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

    @IsInt()
    @Min(0)
    @Max(10)
    nivel_gravidade: number;

    @IsInt()
    @Min(0)
    @Max(1)
    votacao: number;


}