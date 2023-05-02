import { promises } from "dns";
import { api } from "./api";

type IReclamationList = [];

interface IReclamation {
    id: number;
    title: string;
    description: string;
    status: string;
    created_at: string;
    responsable: string;
}

interface IDeteailReclamation {
    id: number;
    title: string;
    description: string;
    status: string;
    created_at: string;
    responsable: string;
}

type IReclamationTotalCount = {
    data: IReclamationList[];
    totalCount: number;
}


const getall = async (): Promise<IReclamationTotalCount | Error> => {
    try {
        const {data, headers} = await api.get("/reclamation/");
        if(data){
            return {
                data,
                totalCount: headers["x-total-count"],
            }
        }
        return new Error("Não foi possível obter os dados");
    }catch (error) {
        console.log(error); 
        return new Error((error as {message: string}).message || "Não foi possível obter os dados");
    }
};

const getById = async (): Promise<IDeteailReclamation | Error> => {
    try {
        const {data} = await api.get("/reclamation/${id}");
        if(data){
            return data;
        }
        return new Error("Não foi possível obter os dados");
    }catch (error) {
        console.log(error); 
        return new Error((error as {message: string}).message || "Não foi possível obter os dados");
    }
};

const create = async (): Promise<any> => {
    try {
        const {data} = await api.post("/reclamation/${id}");
        if(data){
            return data;
        }
        return new Error("Não foi possível obter os dados");
    }catch (error) {
        console.log(error); 
        return new Error((error as {message: string}).message || "Não foi possível obter os dados");
    }
};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};    

export const ReclamationService = {
    getall,
    getById,
    create,
    updateById,
    deleteById,
};