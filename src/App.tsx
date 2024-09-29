import React,{ReactNode,Suspense} from 'react';
import SideMenu from 'components/SideMenu/SideMenu';
import './App.scss'
import block from 'bem-cn'
import { BrowserRouter } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux'
import { selectIsUserAuthenticated } from './features/auth/selectors'
import { selectOpenedSideMenu } from './features/sideMenu/selectors'
import  Header  from './components/Header/Header'
import { ToastContainer } from 'react-toastify'
import { Loader } from 'rsuite'
const b = block('app')
interface MyComponentProps {
  children: ReactNode;
}
const App: React.FC<MyComponentProps> = ({children}) => {
  const isSideMenuOpened = useSelector(selectOpenedSideMenu, shallowEqual)
  const isAuth = useSelector(selectIsUserAuthenticated,shallowEqual)
  return (
    <BrowserRouter>
     <div className={b('container')}>
     <ToastContainer />
        <div className={b('main', { isAuth })}>
        <Header />
             <SideMenu/>
            <Suspense fallback={<Loader center size="md" content="loading..." vertical />}>
             <main className={b('main-content')}>{children}</main>
            </Suspense>
        </div>
    </div>
    </BrowserRouter>
  );
};
export default App;
