import create from 'zustand';
import { persist, devtools, prod } from 'zustand/middleware';
import produce from 'immer';

const userStore = (set) => ({
  user: {},
  login: (user) => {
    set(() => ({
      user: user,
    }));
    // console.log(item);
  },
  // updateCart: (productName) =>
  //   set(
  //     produce((state) => {
  //       const item = state.items.find((el) => el.itemName === productName);
  //       item.qty++;
  //     })
  //   ),
  // removeItem: (itemId) => {
  //   set((state) => ({
  //     items: state.items.filter((i) => i.id !== itemId),
  //   }));
  // },

  logout: () => set({ user: {} }),
});
// console.log(typeof user);
export const useUserStore = create(
  devtools(persist(userStore, { name: 'user' }))
);
