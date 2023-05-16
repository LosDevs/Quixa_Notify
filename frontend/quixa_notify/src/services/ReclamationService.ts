import { api } from "./api";
//*cadastrar
interface props {
    titulo: string;
    longitude: string;
    latitude: string;
    endereco: string;
    tipo_problema: string;
    nivel_gavidade: number;
    votacao: number;
    image: string;
}
export const create = async (form: any) => {
    const token = api.defaults.headers.common['Authorization' ];
    console.log(token)
    console.log()
    try {
        api.post('/problemas',form, {headers: {'Authorization': `Bearer ${token}`}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}