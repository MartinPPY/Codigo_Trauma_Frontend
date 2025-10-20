import type { LoginRequest, LoginResponse, UseApiCall } from "../models";
import { axiosInstance } from "./axios.service";

export const login = (request: LoginRequest): UseApiCall<LoginResponse> => {
    const controller = new AbortController()

    return {
        call: axiosInstance.post<LoginResponse>(`/login`, request, { signal: controller.signal }),
        controller: controller
    }
}