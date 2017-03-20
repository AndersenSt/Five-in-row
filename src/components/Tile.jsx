import React from 'react';
import Paper from 'material-ui/Paper';

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


    render() {
        return (
            <Paper 
                onMouseOver={() => this.setState({zDepth: this.props.value === "" ? 4 : 2})}
                onMouseLeave={() => this.setState({zDepth: 2})}
                zDepth={this.state.zDepth} 
                className={this.props.value === "" ? "tile-empty" : "tile-full"}
                onClick={() => this.tileClick(this.props)}
            >
                {this.props.value}
            </Paper>
        );
    }
}

export default Tile;