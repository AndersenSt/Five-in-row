import React from 'react';
import { createBoard } from './utils';

 const initialState = {
    PLAYER_ONE: 1, 
    PLAYER_TWO: 2,
    currentTurn: 2,
    gameBoard: createBoard(10),
    boardSize: 10,
    winner: null,
    loser: null
}

export default initialState;
