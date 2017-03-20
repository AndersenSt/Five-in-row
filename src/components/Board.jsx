import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateGameBoard, } from '../actions';
import Tile from './Tile';
import RaisedButton from 'material-ui/RaisedButton';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.updateBoard = this.updateBoard.bind(this);
    }

    updateBoard(x, y) {
            this.props.updateGameBoard(x, y);
    }

    render() {
        return (
                <div className="board">
                    {this.props.gameBoard.map((elem, y) =>
                        <div key={y} className="row">{elem.map((el, x) =>
                            <Tile
                                key={x}
                                y={y}
                                x={x}
                                value={el}
                                updateBoard={this.updateBoard}
                            />)}
                        </div>
                    )}
                </div>
         );
     }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    updateGameBoard: bindActionCreators(updateGameBoard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);