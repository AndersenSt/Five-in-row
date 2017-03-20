import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import Board from '../components/Board';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { resetGameBoard } from '../actions';

class GamePage extends React.Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.winner)  {
            hashHistory.push(`/game-over`);
        }
    }

    back(value) {
        this.props.resetGameBoard();
        hashHistory.push(`${value}`);
    }

     reset() {
       this.props.resetGameBoard();
    }

    render() {
        return (
            <Paper zDepth={2} className="game-page">
                <Board />
                <RaisedButton
                    className="button"
                    label="back"
                    primary={true}
                    onClick={() => this.back("/")}
                />
                <RaisedButton
                    className="button"
                    label="reset"
                    primary={true}
                    onClick={() => this.reset()}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    resetGameBoard: bindActionCreators(resetGameBoard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);