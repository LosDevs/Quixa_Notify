import { IsNotEmpty } from 'class-validator';

export class GetEnderecoDto {
    @IsNotEmpty({message : "A longitude não pode ser vazia"})
    longitude : String;
    @IsNotEmpty({message : "A latitude não pode ser vazia"})
    latitude : String;
}