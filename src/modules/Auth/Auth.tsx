import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'

const SignIn = React.lazy(() => import('pages/Auth/SignIn'))
const Registration = React.lazy(() => import('pages/Registration/Registration'))

export const authSignInRoute = '/auth/sign-in'
export const authRegistrationRoute = '/auth/sign-up/:code'

export class AuthModule {
  getRoutes() {
    return (
      <Route key="/auth" path="/auth">
        <Switch>
          <ProtectedRoute key={authSignInRoute} path={authSignInRoute} forAuth={false} component={SignIn} />
          <ProtectedRoute
            key={authRegistrationRoute}
            path={authRegistrationRoute}
            forAuth={false}
            component={Registration}
          />
        </Switch>
      </Route>
    )
  }
}
