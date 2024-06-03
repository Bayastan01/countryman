import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import FavoritePage from '../../pages/FavoritePage/FavoritePage'
import { Route } from 'react-router-dom'


export const favoritePageRoute = '/favorite'
export class FavoritePageModule {
  getRoutes() {
    return (
      <Route key="/favorite" path="/favorite">
           <ProtectedRoute key={favoritePageRoute} path={favoritePageRoute} component={FavoritePage} />
      </Route>
    )
  }
}
