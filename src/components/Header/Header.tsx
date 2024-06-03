import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
// import { selectLocaleDict } from '../../features/locale/selectors';
import { selectOpenedSideMenu } from '../../features/sideMenu/selectors';
// import { authRegistrationRoute, authSignInRoute } from '../../modules/Auth/Auth'

import Logo from '../../shared/image/logo.svg';
import SignUpIcon from '../../shared/image/home.svg';
import SignInIcon from '../../shared/image/favorite.svg';
import { selectIsUserAuthenticated } from '../../features/auth/selectors'
import './Header.scss';
import { InputSearch } from '../../components/Input/Input';
const b = block('header');

const Header: React.FC = () => {
  const [userState, setUserState] = useState({
    username: '',
    // repeat: '',
    // currency: 'EUR',
    // readed: false,
  })

  const isSideMenuOpened = useSelector(selectOpenedSideMenu, shallowEqual);
  // const allLocals = useSelector(selectLocaleDict, shallowEqual);
  const isAuth = useSelector(selectIsUserAuthenticated,shallowEqual)
  // const locale = allLocals.auth;
  const handleChangeUser = (event: any) => {
    setUserState(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }))
   
  }


  return (
    <header className={b()}>
      <div className={b(`left`, )}>
            <div className={b('side-menu_btn')}>
              <img src={Logo} className={b('burger', { opened: isSideMenuOpened })}  />
            </div>
              <div className={b('menu-title' , { opened: isSideMenuOpened })}>JerDesh</div>
      </div>
    <div className={b('input')}>
    <InputSearch
                type="text"
                placeholder='Seach'
                name="username"
                isRequired
                value={userState.username}
                onChange={handleChangeUser}
             />
    </div>

      <div className={b('right')}>
        {isAuth ? (
          <>
            <div className={b('right_item')}>
              <div className={b('set-language')}>S</div>
            </div>
            <div className={b('right_item')}>
              <div className={b('user')}>U</div>
            </div>
          </>
        ) : (
          <>
            <AuthLink to="/register" icon={SignUpIcon}   text=""/>
            <AuthLink to="/login" icon={SignInIcon} text="" />
            {/* <AuthLink to="/login" icon={SignInIcon} text="Sign In" /> */}
          </>
        //   <>
        //   <Link to={authRegistrationRoute} className={b('auth-link', { signUp: true })}>
        //     <SignUpIcon className={b('auth-link_icon')} />
        //     <span className={b('auth-link_text')}>{locale.registration}</span>
        //   </Link>
        //   <Link to={authSignInRoute} className={b('auth-link', { signIn: true })}>
        //     <SignInIcon className={b('auth-link_icon')} />
        //     <span className={b('auth-link_text')}>{locale.authorization}</span>
        //   </Link>
        // </>


        )}
      </div>
    </header>
  );
};

const AuthLink: React.FC<{ to: string; icon: string; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className={b('auth-link')}>
    <img src={icon} className={b('auth-link_icon')} alt={text} />
    <span className={b('auth-link_text')}>{text}</span>
  </Link>
);

export default Header;
