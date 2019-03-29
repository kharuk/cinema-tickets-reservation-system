import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { links } from '../config/links';


const PrivateRoute = ({ component: Components, isLoggedIn, role, requiredRoles, ...rest}) => {
    if (isLoggedIn && requiredRoles.includes(role)) {
        return <Route {...rest} render={props => <Components {...props} />} />;
    }
    return <Redirect exact to={links.SIGN_IN_PAGE} />;
};

const mapStateToProps = state => ({
    isLoggedIn: state.user.loggedIn,
    role: state.user.user ? state.user.user.role : '',
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
