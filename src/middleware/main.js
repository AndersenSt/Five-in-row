import { UPDATE_GAME_BOARD } from '../actions';
import { getWinner, combinations } from '../utils';

const middleware = store => next => action => {
    if(action.type !== UPDATE_GAME_BOARD) return next(action);

    const state = store.getState();
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
    next({
        ...action,
        currentTurn: newSign,
        gameBoard,
        winner,
        loser
    })
}

export default middleware;