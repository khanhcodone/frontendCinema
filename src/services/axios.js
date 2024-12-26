import axios from 'axios'
import queryString from 'qs'
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
    },
    paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async (config) => {
    return config
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return {
          status: response.status,
          data: response.data,
          total: response.headers['content-range']
        }
    }
    return response
}, (error) => {
    throw error
})
export default axiosClient
