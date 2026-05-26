

// login Request type

import apiClient from "@/api/apiClient";

export interface LoginRequest {
    username: string;
    password: string;
}


// login response type 

export interface LoginResponse {
    displayName?: string,
    userId?: string,
    userIdNumber?: number,
    username?: string,
    keycloakId?: string,
    email?: string
}

const login = async (payload: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/signin', payload)
    return response.data
}

export const authService = {
    login
}