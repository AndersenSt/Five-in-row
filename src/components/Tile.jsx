import React from 'react';

import Paper from 'material-ui/Paper';
import CvgX from 'material-ui/svg-icons/Content/clear';
import CvgO from 'material-ui/svg-icons/Image/panorama-fish-eye';
import { blue500, pinkA400 } from 'material-ui/styles/colors';

class Tile extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            zDepth: 2
        };
    }

    tileClick(props) {
        if(props.value === "") {
        props.updateBoard(props.x, props.y);
        }
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
            <Paper 
                onMouseOver={() => this.setState({zDepth: this.props.value === "" ? 4 : 2})}
                onMouseLeave={() => this.setState({zDepth: 2})}
                zDepth={this.state.zDepth} 
                className={this.props.value === "" ? "tile-empty" : "tile-full"}
                onClick={() => this.tileClick(this.props)}
            >
                {this.addIcon(this.props.value)}
            </Paper>
        );
    }
}

export default Tile;