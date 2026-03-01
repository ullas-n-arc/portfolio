import { create } from 'zustand';

export type Section = 'hero' | 'skills' | 'projects' | 'experience' | 'contact';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

interface GameState {
  currentSection: Section;
  isMenuOpen: boolean;
  mousePosition: MousePosition;
  scrollProgress: number; // 0 to 1
  activeProject: string | null;
  isLoaded: boolean;

  // Actions
  setCurrentSection: (section: Section) => void;
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;
  setMousePosition: (pos: MousePosition) => void;
  setScrollProgress: (progress: number) => void;
  setActiveProject: (project: string | null) => void;
  setLoaded: (loaded: boolean) => void;
}

const useGameStore = create<GameState>((set) => ({
  currentSection: 'hero',
  isMenuOpen: false,
  mousePosition: { x: 0, y: 0, normalizedX: 0, normalizedY: 0 },
  scrollProgress: 0,
  activeProject: null,
  isLoaded: false,

  setCurrentSection: (section) => set({ currentSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setMousePosition: (pos) => set({ mousePosition: pos }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveProject: (project) => set({ activeProject: project }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));

export default useGameStore;
