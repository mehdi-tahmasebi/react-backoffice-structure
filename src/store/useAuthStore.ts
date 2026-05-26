import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { LoginResponse } from "@/services/auth/authService";




export interface UserSafeInfo {
    name: string
}

interface AuthState {
    user: UserSafeInfo | null;
    isAuthenticated: boolean;
    login: (response: LoginResponse) => void;
    logout: () => void;
}

const mapUser = (response: LoginResponse): UserSafeInfo => ({
    name: response.displayName,
})


export const useAuthStore = create<AuthState>()(
    persist((set) => ({
        isAuthenticated: false,
        user: null,

        login: (response: LoginResponse) => {
            const userInformation = mapUser(response)
            set({
                user: userInformation,
                isAuthenticated: true,
            })
        },
        logout: () => {
            set({
                user: null,
                isAuthenticated: false,
            })
        }
    }), {
        name: 'auth-storage',
        partialize: (state) => ({
            user: state.user,
            isAuthenticated: state.isAuthenticated,

        })

    }
    )
);