import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";

interface AxiosRequestConfigExtra extends AxiosRequestConfig {
    _isRetry: boolean
}
const isAxiosRequestConfigExtra = (_config: AxiosRequestConfig): _config is AxiosRequestConfigExtra => {
    return true;
}


export const API_URL = import.meta.env.VITE_JWT_API_TOKEN;

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

$api.interceptors.request.use(function(config: InternalAxiosRequestConfig) {
    console.log("config: ", config);
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = token`Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
}, function(error) {
    return Promise.reject(error);
})

// Делал для instantwebtools.net
// $api.interceptors.response.use(function(config: AxiosResponse) {
//     return config;
// }, async function(error: AxiosError) {
//     // if it is unable to fetch the data - try to refresh the token and then fetch this one.
//     if(axios.isAxiosError(error) && error.response) {
//         if (error.response.status === 401) {
//             if (error.config && isAxiosRequestConfigExtra(error.config) && !error.config._isRetry) {
//                 error.config._isRetry = true;
//                 const originalRequest = error.config;
//                 try {
//                     const response = await AuthService.refreshToken();
//                     localStorage.setItem("token", response.data.accessToken);
//                     return $api.request(originalRequest);
//                 }
//                 catch (error) {
//                     return Promise.reject(error);
//                 }
//             }
//         }
//     }
//     return Promise.reject(error);
// })

export {$api}