import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { setSizeGameBoard } from '../actions';

class StartPage extends React.Component {
    start(value) {
        hashHistory.push(`/${value}`)
    }
    
     getSize(size) {
        this.props.setSizeGameBoard(size);
    }

    render() {
        return (
            <Paper className="page-start-game" zDepth={2}>
                <h1>FIVE IN ROW</h1>
                <div className="size">
                    <div>Size of the game board</div>
                    <RaisedButton
                        className="button"
                        label="5 * 5"
                        primary={this.props.boardSize !== 5}
                        secondary={this.props.boardSize === 5}
                        onClick={() => this.getSize(5)}
                    />
                    <RaisedButton
                        className="button"
                        label="10 * 10"
                        primary={this.props.boardSize !== 10}
                        secondary={this.props.boardSize === 10}
                        onClick={() => this.getSize(10)}
                    />
                    <RaisedButton
                        className="button"
                        label="15 * 15"
                        primary={this.props.boardSize !== 15}
                        secondary={this.props.boardSize === 15}
                        onClick={() => this.getSize(15)}
                    />
                </div>
                <RaisedButton
                    className="button"
                    label="Start"
                    primary={true}
                    onClick={() => this.start("game")}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    setSizeGameBoard: bindActionCreators(setSizeGameBoard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
