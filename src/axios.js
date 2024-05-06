import axios from "axios"

export const api = 'https://fish-frau-api.vercel.app';

const instanse = axios.create({
    baseURL: api
})

export default instanse