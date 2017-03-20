import { SET_SIZE_GAME_BOARD, RESET_GAME_BOARD, SHOW_WINNER, UPDATE_GAME_BOARD } from '../actions';
import { createBoard } from '../utils';

 function reducer(state = {}, action = {}) {
    switch(action.type) {
        case SET_SIZE_GAME_BOARD: 
            return {
                ...state,
                boardSize: action.size,
                gameBoard: createBoard(action.size)
            };
            break;

        case UPDATE_GAME_BOARD:
            return {
                ...state,
                currentTurn: action.currentTurn,
                gameBoard: action.gameBoard,
                winner: action.winner,
                loser: action.loser
            };
            break;

        case RESET_GAME_BOARD:
            return {
                ...state,
                gameBoard: createBoard(state.boardSize),
                winner: null,
                loser: null,
                currentTurn: 2 
            }
            break;
        default: return state;
    }
}

export default reducer;