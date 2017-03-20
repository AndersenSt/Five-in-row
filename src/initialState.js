import React from 'react';
import { createBoard } from './utils';
import CvgX from 'material-ui/svg-icons/Content/clear';
import CvgO from 'material-ui/svg-icons/Image/panorama-fish-eye';
import { blue500, pinkA400 } from 'material-ui/styles/colors';

 const initialState = {
    PLAYER_ONE: <CvgX color={blue500}/>, 
    PLAYER_TWO: <CvgO color={pinkA400}/>,
    currentTurn: <CvgO />,
    gameBoard: createBoard(10),
    boardSize: 10,
    winner: null,
    loser: null
}

export default initialState;
