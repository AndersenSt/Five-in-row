import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { resetGameBoard } from '../actions';
import GameIcon from '../components/GameIcon';

class GameOverPage extends React.Component {
    goToStart(value) {
        this.props.resetGameBoard();
        hashHistory.push(`${value}`);
    }

    render() {
        return (
            <Paper className="page-game-over" zDepth={2}>
                <h2>GAME OVER</h2>
                    <div className="win">
                        <div>winner</div>
                        <GameIcon value={this.props.winner} />
                    </div>
                    <div className="loser">
                        <div>loser</div>
                        <GameIcon value={this.props.loser} />
                    </div>
                <RaisedButton
                    className="button"
                    label="go to start page"
                    primary={true}
                    onClick={() => this.goToStart("/")}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    resetGameBoard: bindActionCreators(resetGameBoard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverPage);