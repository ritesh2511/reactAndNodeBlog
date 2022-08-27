import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://blogesss.herokuapp.com/api/"
})
