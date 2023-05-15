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
export const create = async ({ titulo, longitude, latitude, endereco, tipo_problema, nivel_gavidade, votacao, image }: props) => {
    try {
        api.post('/problemas', {
            titulo: titulo,
            longitude: longitude,
            latitude: latitude,
            endereco: endereco,
            tipo_problema: tipo_problema,
            nivel_gavidade: nivel_gavidade,
            votacao: votacao,
            image: image,
        })
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