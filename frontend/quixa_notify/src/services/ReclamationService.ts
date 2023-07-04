import { api } from "./api";

// interface props {
//   titulo: string;
//   longitude: string;
//   latitude: string;
//   endereco: string;
//   tipo_problema: string;
//   nivel_gavidade: number;
//   votacao: number;
//   descricao : string;
//   image: string;
// }

export const create = async (form: any) => {
  const token = api.defaults.headers.common['Authorization'];

  try {
    api.post('/problemas',form, {headers: {'Authorization': `Bearer ${token}`}});
  } catch (error) {
    console.error(error);      
  }
}

export const get = async () => {
  try {
    const { data } = await api.get('http://localhost:3000/problemas');

    return data;
  }catch(error){
    console.error(error);
  }
}

export const addCommentInReclamation = async (commentText: string, idProblema: string | null) => {
  if(idProblema === null ) {
    return
  }

  try {
    const token = JSON.parse(localStorage.getItem('token') || '');

    const content = {
      comentario: commentText,
      idproblema: idProblema
    }

    const headers = {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json' 
    };

    const data = await api.post('http://localhost:3000/problemas/comentario', content, { headers });

    const success = data.status === 201 ? true : false;
    
    return { success, data };
  } catch(error) {
    console.error(error);
  }
}
