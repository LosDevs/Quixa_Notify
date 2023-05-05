import { api } from "./api";

interface props {
    name: string;
    password: string;
    email: string;
}

export const create = async ({name,password,email}: props)=> {
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