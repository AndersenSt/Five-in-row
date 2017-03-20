export const SET_SIZE_GAME_BOARD = 'SET_SIZE_GAME_BOARD';
export const RESET_GAME_BOARD = "RESET_GAME_BOARD";
export const UPDATE_GAME_BOARD = 'UPDATE_GAME_BOARD';

export const setSizeGameBoard = size => ({
    type: 'SET_SIZE_GAME_BOARD',
    size
});

export const resetGameBoard = () => ({
    type: 'RESET_GAME_BOARD'
});

export const updateGameBoard = (x, y) => ({
    type: 'UPDATE_GAME_BOARD',
    x,
    y
});



