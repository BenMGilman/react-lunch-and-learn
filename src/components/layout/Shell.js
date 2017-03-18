import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopNav from './TopNav';

class Shell extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <header className="clearfix">
                        <TopNav title="Insights"/>
                    </header>
                    <div className="content-body">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

Shell.propTypes = {
    children: PropTypes.element
};

export default Shell;