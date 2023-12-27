import axios from 'axios'

const httpInstance = axios.create({
    baseURL: "http://localhost:8880/",
    timeout: 5000
})

httpInstance.interceptors.response.use(res => res.data,
    e => {
        Promise.reject(e)

        return Promise.reject(e)
    })

export default httpInstance
