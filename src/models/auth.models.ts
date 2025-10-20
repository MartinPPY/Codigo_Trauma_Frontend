
export interface LoginRequest {
    username: string,
    passwrod: string
}

export interface LoginResponse {
    token: string,
    username: string,
    message: string
}