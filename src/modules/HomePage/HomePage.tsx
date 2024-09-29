import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage')); // Correct lazy import
export const homePageRoute = '/home'
export class HomePageModule {
  getRoutes() {
    return (
      <Route key="/home" path="/home">
        <Switch>
          <ProtectedRoute key={homePageRoute} path={homePageRoute}  component={HomePage} />
        </Switch>
      </Route>
    )
  }
}

