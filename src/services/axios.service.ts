/* FICHERO PARA CONFIGURAR LAS PETICIONES A LA API */

import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
    axiosInstance.create({ baseURL: baseURL })
}

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            //aqui podriamos agregar tokens
            //config.headers.set()
            return config
        },
        (error: any) => {
            return Promise.reject(error)
        }
    )
}

//TODO agregar interceptores de response


export const initAxios = () => {
    createAxios('http://localhost:8080')
    setupInterceptors()
    return axiosInstance
}