import create from 'zustand';
import { persist, devtools, prod } from 'zustand/middleware';
import produce from 'immer';

const itemsStore = (set) => ({
  items: [],
  addToCart: (item) => {
    set((state) => ({
      items: [item, ...state.items],
    }));
    // console.log(item);
  },
  updateCart: (productName) =>
    set(
      produce((state) => {
        const item = state.items.find((el) => el.itemName === productName);
        item.qty++;
      })
    ),
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
