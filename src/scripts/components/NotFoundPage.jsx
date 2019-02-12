import React from 'react';
import {NavLink} from 'react-router-dom';
const NotFoundPage = () => (
    <div>
        404 Not Found - <NavLink activeClassName="is-active" to="/" exact={true}> Go Home </NavLink>
    </div>
);
export default NotFoundPage;