import { create } from "zustand";

type ConfettiStore = {
    isOpen: boolean;
    onOpen: () => void;
    onColse: () => void;
};

export const useConfettiStore = create<ConfettiStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onColse: () => set({ isOpen: false }),
}));