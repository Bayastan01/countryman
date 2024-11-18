import React, { useMemo, useCallback } from 'react';
import './SideMenu.scss';
import block from 'bem-cn';
import { Link, useLocation } from 'react-router-dom';
import { sideMenuList } from './Data/index';
import MainLogoIcon from '../../shared/image/logo.svg';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { actions as sideMenuActions } from '../../features/sideMenu';
import { actions as newPostActions } from '../../features/newPost';
import { selectOpenedSideMenu } from '../../features/sideMenu/selectors';
import { selectOpenedNewPost } from '../../features/newPost/selectors';
import { selectLocaleDict } from '../../features/locale/selectors';
import { selectIsUserAuthenticated } from '../../features/auth/selectors';
import CrossIcon from '../../shared/image/burger.svg';

const b = block('side-menu');

const SideMenuItem = React.memo(({ item, isSideMenuOpened, locale, location }) => {
  const dispatch = useDispatch();
  const isNewPostOpened = useSelector(selectOpenedNewPost);

  const handleAction = useCallback(() => {
    if (item.action === 'toggleNewPost') {
      dispatch(newPostActions.changeOpenedNewPost(!isNewPostOpened));
    }
  }, [item.action, isNewPostOpened, dispatch]);

  const isActive = location.pathname === item.route;

  return (
    <div className={b('link')}>
      <Link
        to={item.route || '#'}
        className={b(item.icon === 'AddIcon' ? 'itemPorstBtn' : 'item', { closed: !isSideMenuOpened, active: isActive }).toString()}
        onClick={handleAction}
      >
        {item.icon && <img src={item.icon} className={b('item-icon')} alt="Icon" />}
        <div className={b('item-text')}>{locale[item.textIdent[0]][item.textIdent[1]]}</div>
      </Link>
    </div>
  );
});

const SideMenuBlock = React.memo(({ block, isSideMenuOpened, locale, location }) => (
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
  </div>
));

const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isSideMenuOpened = useSelector(selectOpenedSideMenu, shallowEqual);
  const isNewPostOpened = useSelector(selectOpenedNewPost, shallowEqual);
  const locale = useSelector(selectLocaleDict, shallowEqual);
  const isAuth = useSelector(selectIsUserAuthenticated, shallowEqual);

  const toggleSideMenu = useCallback(() => {
    dispatch(sideMenuActions.changeOpenedSideMenu(!isSideMenuOpened));
  }, [isSideMenuOpened, dispatch]);

  const toggleNewPost = useCallback(() => {
    dispatch(newPostActions.changeOpenedNewPost(!isNewPostOpened));
  }, [isNewPostOpened, dispatch]);

  const menuBlocks = useMemo(
    () =>
      sideMenuList.map((menuBlock, index) => (
        <SideMenuBlock
          key={index}
          block={menuBlock}
          isSideMenuOpened={isSideMenuOpened}
          locale={locale}
          location={location}
        />
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
              alt="Close"
              className={b('cross', { opened: isSideMenuOpened })}
              onClick={toggleSideMenu}
            />
          </div>
          <div className={b('openLogo', { closed: !isSideMenuOpened })}>
            <img src={MainLogoIcon} alt="Logo" />
            <span
              className={b('openLogo-title')}
              onClick={toggleNewPost}
              style={{ color: isNewPostOpened ? 'red' : 'blue' }}
            >
              JerDesh
            </span>
          </div>
        </div>
        <div className={b('blocks')}>{menuBlocks}</div>
      </aside>
      <div className={b('outside-block', { opened: isSideMenuOpened })} onClick={toggleSideMenu} />
    </>
  );
};

export default React.memo(SideMenu);
