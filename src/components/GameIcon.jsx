import React from 'react';

import CvgX from 'material-ui/svg-icons/Content/clear';
import CvgO from 'material-ui/svg-icons/Image/panorama-fish-eye';
import { blue500, pinkA400 } from 'material-ui/styles/colors';

class GameIcon extends React.Component {
     getIcon() {
        const {value} = this.props;

        if(value === 1) {
            return (<CvgX color={blue500}/>);
        }
        if(value === 2) {
            return (<CvgO color={pinkA400}/>);
        }
    }

    render() {
        return (
            <div>
                {this.getIcon()}
            </div>
        );
    }
}

export default GameIcon;