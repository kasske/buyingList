import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      showSidebar: true,

      toggleSidebar: () => {
        set((state) => ({ showSidebar: !state.showSidebar }));
      },
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          eBlere: false,
        };

        set((state) => ({ items: [newItem, ...state.items] }));
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, eBlere: !item.eBlere };
            }

            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, eBlere: true };
          });

          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, eBlere: false };
          });

          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);