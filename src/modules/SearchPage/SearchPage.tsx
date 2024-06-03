import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import SearchPage from '../../pages/SearchPage/SearchPage'
import { Route } from 'react-router-dom'


export const searchPageRoute = '/search'
export class SearchPageModule {
  getRoutes() {
    return (
      <Route key="/search" path="/search">
           <ProtectedRoute key={searchPageRoute} path={searchPageRoute} component={SearchPage} />
      </Route>
    )
  }
}
