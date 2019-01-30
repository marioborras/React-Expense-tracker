//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse Code
//Render Hijacking
//Prop manipulation
//Abstract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>info</h1>
    <h2>Hello {props.name}</h2>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private Info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login to see the info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AuthInfo isAuthenticated={false} name="Mario" info="these are the details" />,
  document.getElementById('app')
);
