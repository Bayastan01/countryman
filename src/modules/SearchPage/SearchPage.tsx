import  {lazy} from 'react'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'
const SearchPage = lazy(()=> import('../../pages/SearchPage/SearchPage'))

export const searchPageRoute = '/explore'
export class SearchPageModule {
  getRoutes() {
    return (
      <Route key="/explore" path="/explore">
        <Switch>
           <ProtectedRoute key={searchPageRoute} path={searchPageRoute} component={SearchPage} />
        </Switch>
      </Route>
    )
  }
}
