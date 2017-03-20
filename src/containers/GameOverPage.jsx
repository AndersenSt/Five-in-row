import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { resetGameBoard } from '../actions';

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
                        <div>{this.props.winner}</div>
                    </div>
                    <div className="loser">
                        <div>loser</div>
                        <div>{this.props.loser}</div>
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