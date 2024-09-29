import { lazy } from 'react';
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import { Route,Switch } from 'react-router-dom'
const FavoritePage = lazy(() => import('../../pages/FavoritePage/FavoritePage'))


export const favoritePageRoute = '/favorite'
export class FavoritePageModule {
  getRoutes() {
    return (
      <Route key="/favorite" path="/favorite">
        <Switch>
           <ProtectedRoute key={favoritePageRoute} path={favoritePageRoute} component={FavoritePage} />
        </Switch>
     </Route>
    )
  }
}
