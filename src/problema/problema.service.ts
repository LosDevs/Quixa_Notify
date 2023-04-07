import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

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
            return {message : 'aconteceu algum problema'}
        }
    }
}