import { api } from "./api";

export const create = async ({name,password,email})=> {
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

export const UserService = {
    create
}