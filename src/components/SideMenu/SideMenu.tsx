/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useCallback } from 'react';
import './SideMenu.scss';
import block from 'bem-cn';
import { Link, useLocation } from 'react-router-dom';
import { sideMenuList } from './Data/index';
import MainLogoIcon from '../../shared/image/logo.svg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions as sideMenuActions } from '../../features/sideMenu';
import { selectOpenedSideMenu } from '../../features/sideMenu/selectors';
import { selectLocaleDict } from '../../features/locale/selectors';
import CrossIcon from '../../shared/image/burger.svg'
import { selectIsUserAuthenticated, selectUserData } from '../../features/auth/selectors'
const b = block('side-menu');
const SideMenuItem = ({ item, isSideMenuOpened, locale, location }) => (
  <div className={b('link')}>
    <Link 
      to={item.route || '#'} 
      className={b('item', { closed: !isSideMenuOpened, active: location.pathname === item.route }).toString()}>
      {item.icon && <img src={item.icon} className={b('item-icon')} alt="Icon" />}
      <div className={b('item-text')}>{locale[item.textIdent[0]][item.textIdent[1]]}</div>
    </Link>
  </div>
);
const SideMenuBlock = ({ block, isSideMenuOpened, locale, location }) => (
  <div key={block.id} className={b('block', `itemsq${block.id}`)}>
    <div className={b('items')}>
      {block.items.map((item, index) => (
        <SideMenuItem 
          key={index} 
          item={item} 
          isSideMenuOpened={isSideMenuOpened} 
          locale={locale} 
          location={location} 
        />
      ))}
    </div>
    <div className="report"></div>
  </div>
);
const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isSideMenuOpened = useSelector(selectOpenedSideMenu, shallowEqual);
  const locale = useSelector(selectLocaleDict, shallowEqual);
  const isAuth = useSelector(selectIsUserAuthenticated, shallowEqual)
  const onCloseSideMenu = useCallback(() => {
    dispatch(sideMenuActions.changeOpenedSideMenu(!isSideMenuOpened));
  }, [isSideMenuOpened, dispatch]);
  const blocks = useMemo(() =>
    sideMenuList.map((menuBlock, ind) => (
      <SideMenuBlock 
        key={ind} 
        block={menuBlock} 
        isSideMenuOpened={isSideMenuOpened} 
        locale={locale} 
        location={location}/>
    )),
    [isSideMenuOpened, locale, location]
  );
  return (
    <>
      <aside className={b({ opened: isSideMenuOpened, isAuth })}>
        <div className={b('logo-wrapper', { closed: !isSideMenuOpened })}>
          <div className={b('crossbtn')}>
            <img 
              src={CrossIcon} 
              alt='x' 
              className={b('cross', { opened: isSideMenuOpened })} 
              onClick={onCloseSideMenu} 
            />
          </div>
          <div className={b('openLogo', { closed: !isSideMenuOpened })}>
            <img src={MainLogoIcon} alt='YGo' />
            <span className={b('openLogo-title')}>
              JerDesh
            </span>
          </div>
        </div>
        <div className={b('blocks')}>
          {blocks}
        </div>
      </aside>
      <div className={b('outside-block', { opened: isSideMenuOpened })}  onClick={onCloseSideMenu} />
    </>
  );
};
export default SideMenu;
