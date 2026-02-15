import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {type User} from "@/types/user.types";
import { authService } from '@/services/authService';


// Auth state interface
interface AuthState {
  // State
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setIsAuthenticated: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  logout: () => void
  login: (user: User) => void
  fetchCurrentUser: () => Promise<void>
}

// Create store
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: true,
      
      // Actions
      setUser: (user) => set({ user }),
      
      setIsAuthenticated: (value) => set({ isAuthenticated: value }),
      
      setIsLoading: (value) => set({ isLoading: value }),
      
      login: (user) => set({ 
        user, 
        isAuthenticated: true,
        isLoading: false
      }),
      
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
      fetchCurrentUser: async () => {
        set({ isLoading: true })
        try {
          const response = await authService.getCurrentUser()
          set({ 
            user: response.user, 
            isAuthenticated: true,
            isLoading: false 
          })
        } catch (error) {
          console.error(error);
          set({ 
            user: null, 
            isAuthenticated: false,
            isLoading: false 
          })
        }
      }
    }),
    {
      name: 'mekrecords-auth', // localStorage key
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)