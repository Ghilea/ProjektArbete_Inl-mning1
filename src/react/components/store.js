import create from 'zustand';

export const Basic = create(set => ({
    create: false,
    options: false,
    mapEditor: false,
    login: false,
    loginSuccess: false,
    loadingDone: false,
    startGame: false,
    isStartGame: (value) => set(state => ({
        ...state,
        startGame: value
    }))
}))