import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';

@Injectable()
export class ProblemaService{
    constructor (private prisma : PrismaService){}

    async postProblema(problema){
        try {
            await this.prisma.problema.create({
                data : problema
            })
            return {message : 'Problema criado com sucesso'}
        } catch (error) {
            return {message : 'aconteceu algum problema', error}
        }
    }

    async getProblemas(){
        try {
            const problemas =  await this.prisma.problema.findMany();
            return problemas
        } catch (error) {
            return {message : 'aconteceu algum problema', error}
        }
    }

    async getProblemaPorTipo(tipo : String){
        try {
            const problemaTipo = await this.prisma.problema.findMany({
                where : {
                    tipo_problema : {
                        contains : `${tipo}`,
                        mode : 'insensitive'
                    }
                }
            })
            return problemaTipo
        } catch (error) {
            return {message : 'aconteceu algum problema', error}
        }
    }

    async getProblemaPorNivelGravidade(nivel){
        try {
            const problemaNivel = await this.prisma.problema.findMany({
                where : {
                    nivel_gravidade: parseInt(nivel)
                }
            })
            return problemaNivel
        } catch (error) {
            return {message : 'aconteceu algum problema', error}
        }
    }

    async getEnderecoCordenada(cords : GetEnderecoDto){
        try {
            const Problema = await this.prisma.problema.findFirst({
                where : {
                    longitude : `${cords.longitude}`,
                    latitude : `${cords.latitude}`
                }
            })
            return Problema
        } catch (error) {
            return {message : 'aconteceu algum problema', error}
        }
    }
}