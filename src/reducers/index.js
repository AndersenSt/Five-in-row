import { SET_SIZE_GAME_BOARD, RESET_GAME_BOARD, SHOW_WINNER, UPDATE_GAME_BOARD } from '../actions';
import { createBoard, getWinner, combinations } from '../utils';

 function reducer(state = {}, action = {}) {
    switch(action.type) {
        case SET_SIZE_GAME_BOARD: 
            return Object.assign({}, state, {
                boardSize: action.size,
                gameBoard: createBoard(action.size)
            });
            break;

        case UPDATE_GAME_BOARD:
            const x = action.x;
            const y = action.y;
            const newSign = state.currentTurn === state.PLAYER_ONE
                            ?
                            state.PLAYER_TWO
                            :
                            state.PLAYER_ONE;
           
            const newRow = state.gameBoard[y].slice(0);
            newRow[x] = newSign;

            const gameBoard =
                 [
                    ...state.gameBoard.slice(0, y),
                    newRow,
                    ...state.gameBoard.slice(y + 1)
                ];
            
             
            let winner = 0;
            let loser = 0;
            for (let i = 0; i < combinations.length; ++i) {
                let sum1 = getWinner(x, y, combinations[i][0], gameBoard);
                let sum2 = getWinner(x, y, combinations[i][1], gameBoard);

                if (sum1 + sum2 + 1 >= 5) {
                    winner = gameBoard[y][x];
                    loser = winner === state.PLAYER_ONE ? state.PLAYER_TWO : state.PLAYER_ONE;
                    break;
                }
            }

            return {
                ...state,
                currentTurn: newSign,
                gameBoard,
                winner,
                loser
            };
            break;

        case RESET_GAME_BOARD:
            return Object.assign({}, state, {
                gameBoard: state.gameBoard.map(element =>
                            element.map(elem => elem = "")),
                winner: null,
                loser: null,
                currentTurn: 'o' 
            });
            break;

        case SHOW_WINNER:
            return Object.assign({}, state, {
                winner: win
            });
        default: return state;
    }
}

export default reducer;