import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const itemsStore =
  //   persist(
  (set) => ({
    items: [],
    addToCart: (item) => {
      set((state) => ({ items: [item, ...state.items] }));
    },
    removeItem: (itemId) => {
      set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
      }));
    },
    removeAllItems: () => set({ items: [] }),
  });

export const useItemseStore = create(
  devtools(persist(itemsStore, { name: 'items' }))
);
