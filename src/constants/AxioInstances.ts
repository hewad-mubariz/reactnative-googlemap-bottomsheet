
import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com/v3/',
    headers:{
        'Content-Type':"application/json",
        'Accept':"application/json"
    }
})

export default AxiosInstance