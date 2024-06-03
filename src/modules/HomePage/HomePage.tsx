import ProtectedRoute from 'components/helpers/ProtectedRoute/ProtectedRoute';
import { Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage'; // Обычный импорт

export const homePageRoute = '/';
export class HomePageModule {
  getRoutes() {
    return (
      <Route exact path={homePageRoute} key="home">
        <ProtectedRoute path={homePageRoute} component={HomePage} />
      </Route>
    );
  }
}
