import axios from 'axios';

// https://betterapi.online/cnpj/37245530000100

const apicnpj = axios.create({
    baseURL: "https://publica.cnpj.ws/cnpj/"
})

export default apicnpj;