import create from 'zustand';

export const Basic = create(set => ({
    path: 'home',
    changePath: (value) => set(state => ({
        ...state,
        path: value
    }))
}))