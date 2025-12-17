import  {lazy} from 'react'
import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'
const AddPage = lazy(()=> import('../../pages/AddPage/AddPage'))


export const addPageRoute = '/add'
export class AddPageModule {
  getRoutes() {
    return (
      <Route key="/add" path="/add">
         <Switch>
         <ProtectedRoute key={addPageRoute} path={addPageRoute} component={AddPage} />
         </Switch>
      </Route>
    )
  }
}