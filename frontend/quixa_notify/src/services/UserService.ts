import { api } from "./api";

// Signup
interface props {
  name: string;
  password: string;
  email: string;
}

export const create = async ({ name, password, email }: props) => {
  try {
    await api.post('/user', {
      name: name,
      password: password,
      email: email
    });

    return true;
  } catch (error) {
    return false;
  }
}

// Login
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

    const idUser = response.data.data.sub;
    const token = response.data.access_token;

    localStorage.setItem("userId", idUser);
    localStorage.setItem("token", token);
    setAuthToken(token);

    return true;
  } catch (error) {
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
    });

    return true;
  } catch (error) {
    return false;
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
