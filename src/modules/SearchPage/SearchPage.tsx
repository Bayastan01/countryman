import  {lazy} from 'react'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'
const SearchPage = lazy(()=> import('../../pages/SearchPage/SearchPage'))

export const searchPageRoute = '/search'
export class SearchPageModule {
  getRoutes() {
    return (
      <Route key="/search" path="/search">
        <Switch>
           <ProtectedRoute key={searchPageRoute} path={searchPageRoute} component={SearchPage} />
        </Switch>
      </Route>
    )
  }
}
