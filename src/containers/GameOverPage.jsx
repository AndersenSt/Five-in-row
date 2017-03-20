import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { resetGameBoard } from '../actions';
import CvgX from 'material-ui/svg-icons/Content/clear';
import CvgO from 'material-ui/svg-icons/Image/panorama-fish-eye';
import { blue500, pinkA400 } from 'material-ui/styles/colors';

class GameOverPage extends React.Component {
    goToStart(value) {
        this.props.resetGameBoard();
        hashHistory.push(`${value}`);
    }

    addIcon(value) {
        if(value === 1) {
            return (<CvgX color={blue500}/>);
        }
        if(value === 2) {
            return (<CvgO color={pinkA400}/>);
        }
    }

    render() {
        return (
            <Paper className="page-game-over" zDepth={2}>
                <h2>GAME OVER</h2>
                    <div className="win">
                        <div>winner</div>
                        <div>{this.addIcon(this.props.winner)}</div>
                    </div>
                    <div className="loser">
                        <div>loser</div>
                        <div>{this.addIcon(this.props.loser)}</div>
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