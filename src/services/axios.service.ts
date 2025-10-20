import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import type { LoginResponse } from "../models";

export let axiosInstance: AxiosInstance;

const createAxiosInstance = (baseURL: string) => {
    axiosInstance = axiosInstance.create({ baseURL: baseURL })
}

const setupInteceptos = () => {

    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const loginResponse: LoginResponse = JSON.parse(localStorage.getItem('user') || '{}')
            if (loginResponse.token) {
                config.headers.set('Authorization', `Bearer ${loginResponse.token}`)
            }

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    ),
        axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {


                return response
            },
            (error) => {
                if (error.response) {
                    console.error(`Error response from: ${error.response.config.url}`)
                } {
                    console.error(`Error: ${error.message}`)
                }

                return Promise.reject(error)
            }
        )


}

export const initAxios = () => {
    createAxiosInstance('http://localhost:8080')
    setupInteceptos()
    return axiosInstance
}