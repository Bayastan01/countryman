import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute'
import AddPage from '../../pages/AddPage/AddPage'
import { Route } from 'react-router-dom'


export const addPageRoute = '/add'
export class AddPageModule {
  getRoutes() {
    return (
      <Route key="/add" path="/add">
         <ProtectedRoute key={addPageRoute} path={addPageRoute} component={AddPage} />
      </Route>
    )
  }
}
