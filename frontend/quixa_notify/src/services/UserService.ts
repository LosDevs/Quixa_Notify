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
    const response = await api.post('/login', {
      password: password,
      email: email
    });
    const token = response.data.access_token;
    setAuthToken(token)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};



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


