import axios from "axios"

export const api = 'https://back-rocked.vercel.app';

const instanse = axios.create({
    baseURL: api
})

export default instanse