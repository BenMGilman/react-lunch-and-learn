import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Shell extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <header className="clearfix"/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

Shell.propTypes = {
    children: PropTypes.element
};

export default Shell;