import axios from "axios"
import type { LoginRequest, LoginResponse } from "../models/auth.models"
import type { UseApiCall } from "../models/useApi.model"

const BASE_URL: string = 'http://localhost:8080'

export const login = (loginRequest: LoginRequest): UseApiCall<LoginResponse> => {
    const controller = new AbortController()

    return {
        call: axios.post<LoginResponse>(`${BASE_URL}/login`, loginRequest, { signal: controller.signal }),
        controller
    }

}
