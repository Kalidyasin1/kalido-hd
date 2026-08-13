import create from 'zustand'

type ThemeId = 'black-gold'|'dark-blue'|'purple'|'green'|'red'|'light'

interface ThemeState {
  id: ThemeId
  setTheme: (id: ThemeId) => void
}

const initial = (localStorage.getItem('kalido-theme') as ThemeId) || 'black-gold'

export const useThemeStore = create<ThemeState>((set) => ({
  id: initial,
  setTheme: (id) => {
    localStorage.setItem('kalido-theme', id)
    document.body.setAttribute('data-theme', id === 'black-gold' ? '' : id === 'light' ? 'light' : id.replace('-', ''))
    set({ id })
  }
}))
