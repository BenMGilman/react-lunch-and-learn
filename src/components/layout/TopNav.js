import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import crederaLogo from '../../styles/images/credera-logo.png';

const styles = {
    title: {
        fontSize: '20px',
        fontWeight: 300
    },
    button: {

    }
};

const TopNav = ({title}) => {
    return (
        <AppBar className="top-nav"
            title={title}
            iconElementLeft={<span/>}
            iconElementRight={<RaisedButton className="logo"><img src={crederaLogo}/></RaisedButton>}/>
    );
};

TopNav.propTypes = {
    title: PropTypes.string.isRequired
};

export default TopNav;