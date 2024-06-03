import React,{ReactNode,useEffect,useState} from 'react';
import SideMenu from 'components/SideMenu/SideMenu';
import './App.scss'
import block from 'bem-cn'
import { BrowserRouter } from 'react-router-dom';

import { shallowEqual, useSelector } from 'react-redux'

import { selectIsUserAuthenticated } from './features/auth/selectors'

import { selectOpenedSideMenu } from './features/sideMenu/selectors'

import  Header  from './components/Header/Header'


const b = block('app')
interface MyComponentProps {
  children: ReactNode;
}

const App: React.FC<MyComponentProps> = ({children}) => {
  // const [isAuth , setIsAuth] = React.useState(true)
  // const [scroll,setScroll] =React.useState(true)
  const isSideMenuOpened = useSelector(selectOpenedSideMenu, shallowEqual)
  const isAuth = useSelector(selectIsUserAuthenticated,shallowEqual)

  return (
    <BrowserRouter>
     <div className={b('container')}>
        <div className={b('main',{ isAuth })} >
             <SideMenu/>
          <div className={b('main-inner',{isSideMenuOpened})}>
             <Header />
             <div className={b('main-content')}>{children}</div>
          </div>
        </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
