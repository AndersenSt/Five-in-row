export const combinations = [
        [
            {x: 0, y: 1},
            {x: 0, y: -1},
        ],
        [
            {x: -1, y: 0},
            {x: 1, y: 0},
        ],
        [
            {x: 1, y: 1},
            {x: -1, y: -1},
        ],
        [
            {x: -1, y: 1},
            {x: 1, y: -1},
        ],
    ];

export function createBoard(size) {
    const array = [];
    for (let i = 0; i < size; i++){
        array[i] = [];
        for (let j = 0; j < size; j++){
            array[i][j] = "";
    }}
    return array;
}

  export function getWinner(x, y, matrix, board) {
        let x2 = x + matrix.x;
        let y2 = y + matrix.y;
        if(y2 >= board.length || y2 < 0) {
            return 0;
        }
        if(board[y][x] === board[y2][x2]) {
            return 1 + getWinner(x2, y2, matrix, board);
        } else {
            return 0;
        }
    }


