import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
               
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        text: state.common.headerText || 'Home'
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;