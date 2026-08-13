import { create } from 'zustand'

interface AuthState {
  user: string | null
  login: (u: string, p: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (u, p) => {
    if (u === 'kalido' && p === 'kalido2026') {
      set({ user: u })
      return true
    }
    return false
  },
  logout: () => set({ user: null })
}))
