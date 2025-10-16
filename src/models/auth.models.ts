
export interface LoginResponse {
    message: string,
    token: string,
    username: string
}

export interface LoginRequest {
    username: string,
    password: string
}