// HIgher order component render another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. </p>
            <WrappedComponent {...props}/>
        </div>
    );

}

const AdminInfo = withAdminWarning(Info);

const withAuthentication = (WrappedInfo) => {
    return (props) => (
        <div>
            {props.authentic && <div><p>This information has been authenticated</p>
            <WrappedInfo {...props} /> </div>}
            
            
        </div>
    );
}

const AuthenticInfo = withAuthentication(Info);


ReactDOM.render(<AuthenticInfo authentic={true} info="RTeal estate"/>, document.getElementById("app"))

// ReactDOM.render(<AdminInfo isAdmin={false} info="RTeal estate"/>, document.getElementById("app"))