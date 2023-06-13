import axios from "axios";
import { api } from "./api";
//*Signup
interface props {
  name: string;
  password: string;
  email: string;
}
export const create = async ({ name, password, email }: props) => {
  try {
    api.post('/user', {
      name: name,
      password: password,
      email: email
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
//*Login
interface LoginProps {
  password: string;
  email: string;
}
export const login = async ({ password, email }: LoginProps) => {
  try {
    await api.post('/login', {
      password: password,
      email: email
    }).then((response) => {
      const idUser = response.data.data.sub;
      const token  =  response.data.access_token;

      localStorage.setItem("userId", idUser);
      localStorage.setItem("token", token);
      setAuthToken(token);
    })

    return true;
  } catch (error) {
    // console.error(error);
    return false;
  }
};


interface votar {
  id: number;
  votacao: number;
}
export const votar = async ({id, votacao} : votar) => {
  try {
    await api.put('http://localhost:3000/problemas/voto', {
      id: id,
      votacao: votacao
    }).then((response) => {
      console.log(response)
    })
  } catch (error) {
    console.error(error);
    throw error
  }
}



const setAuthToken = (token: String) => {

  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }

};

const removeAuthToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

export default { removeAuthToken, setAuthToken };


