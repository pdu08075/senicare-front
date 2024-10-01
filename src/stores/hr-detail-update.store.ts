import { create } from "zustand";       // import 할 때 domain 말고 zustand 하도록 주의

interface HrDetailUpdateStore {
    update: boolean;
    setUpdate: (update: boolean) => void;
}

const useStore = create<HrDetailUpdateStore>(set => ({
    update: false,
    setUpdate: (update: boolean) => set(state => ({ ...state, update })),
}));


export default useStore;

// 객체 반환하겠다는 뜻으로 소괄호, 중괄호 입력