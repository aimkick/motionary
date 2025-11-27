import { create } from 'zustand';

export type FilterCategory = 'trigger' | 'emotion' | 'tech' | 'element';

interface FilterState {
  activeFilters: {
    trigger: string | null;
    emotion: string | null;
    tech: string | null;
    element: string | null;
  };
  searchQuery: string;
  setFilter: (category: FilterCategory, value: string | null) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeFilters: {
    trigger: null,
    emotion: null,
    tech: null,
    element: null,
  },
  searchQuery: '',
  setFilter: (category, value) =>
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [category]: state.activeFilters[category] === value ? null : value,
      },
    })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () =>
    set({
      activeFilters: {
        trigger: null,
        emotion: null,
        tech: null,
        element: null,
      },
      searchQuery: '',
    }),
}));

