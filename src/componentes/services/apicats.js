import axios from 'axios';

// https://wdapi2.com.br/consulta/INT8C36/token


const apicats = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

export default apicats;