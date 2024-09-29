import { lazy } from 'react'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'

const ProfilePage = lazy(()=>import ('../../pages/ProfilePage/ProfilePage'))
export const profilePageRoute = '/profile'
export class ProfilePageModule {
  getRoutes() {
    return (
      <Route key="/profile" path="/profile">
        <Switch>
           <ProtectedRoute key={profilePageRoute} path={profilePageRoute} component={ProfilePage} />
           </Switch>
      </Route>
    )
  }
}
