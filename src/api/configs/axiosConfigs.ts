import axios, { AxiosError } from "axios"

const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/api/v1"
})

const errorHandler = (error: AxiosError) => {
    const statusCode = error.response?.status

    if (statusCode && statusCode !== 401) {
        // console.log(error)
    }
    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})

export default api