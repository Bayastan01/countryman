/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component: Component, ...restOfProps }) => {
  return (
    <Route {...restOfProps} render={props => <Component {...props} />} />
  );
};

export default ProtectedRoute;


// import { selectIsUserAuthenticated } from '../../../features/auth/selectors'
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Redirect, Route } from 'react-router-dom'

// interface IProtectedRouteProps {
//   component: React.FC<any>
//   [key: string]: any
//   forAuth?: boolean
// }

// const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ forAuth = true, component: Component, ...restOfProps }) => {
//   const isAuthenticated = useSelector(selectIsUserAuthenticated)

//   const tExp = forAuth ? isAuthenticated : !isAuthenticated
//   if (isAuthenticated && !forAuth) return <Redirect to="/main" />
//   return (
//     <Route {...restOfProps} render={props => (tExp ? <Component {...props} /> : <Redirect to="/home" />)} />
//   )
// }

// export default ProtectedRoute
