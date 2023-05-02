import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';

@Injectable()
export class ProblemaService {
    constructor(private prisma: PrismaService) { }

    async postProblema(problema, idUsuario) {
        try {
            const {
                titulo,
                longitude,
                latitude,
                endereco,
                tipo_problema,
                nivel_gravidade,
                votacao,
            } = problema
            await this.prisma.problema.create({
                data: {
                    titulo: String(titulo),
                    longitude : String(longitude),
                    latitude : String(latitude),
                    endereco : String(endereco),
                    tipo_problema : String(tipo_problema),
                    nivel_gravidade : Number(nivel_gravidade),
                    votacao : Number(votacao),
                    usuario:{
                        connect :  {id : Number(idUsuario)}
                    } ,
                }
            })
            return { message: 'Problema criado com sucesso' }
        } catch (error) {
            return { message: 'aconteceu algum problema' + error }
        }
    }

    async getProblemas() {
        try {
            const problemas = await this.prisma.problema.findMany({
                include : {usuario : true},
            });

            return problemas
        } catch (error) {
            return { message: 'aconteceu algum problema', error }
        }
    }

    async getEnderecoCordenada(cords: GetEnderecoDto) {
        try {
            const Problema = await this.prisma.problema.findFirst({
                where: {
                    longitude: `${cords.longitude}`,
                    latitude: `${cords.latitude}`
                }
            })
            return Problema
        } catch (error) {
            return { message: 'aconteceu algum problema', error }
        }
    }
}