import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import { Route } from 'react-router-dom'


export const profilePageRoute = '/profile'
export class ProfilePageModule {
  getRoutes() {
    return (
      <Route key="/profile" path="/profile">
                              <ProtectedRoute key={profilePageRoute} path={profilePageRoute} component={ProfilePage} />
      </Route>
    )
  }
}
