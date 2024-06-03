

import HomeIcon from '../../../shared/image/home.svg';
import ProfileIcon from '../../../shared/image/profile.svg';
import AddIcon from '../../../shared/image/Basket.svg';
import SearchIcon from '../../../shared/image/search.svg';
import FavoriteIcon from '../../../shared/image/favorite.svg';

import { homePageRoute } from '../../../modules/HomePage/HomePage'
import { profilePageRoute } from '../../../modules/ProfilePage/ProfilePage'
import { addPageRoute } from '../../../modules/AddPage/AddPage'
import { searchPageRoute } from '../../../modules/SearchPage/SearchPage'
import { favoritePageRoute } from '../../../modules/FavoritePage/FavoritePage'


interface ILinkMenuListItem {
  route?: string;
  icon?: string; // Change the type of icon according to the imported SVG files
  textIdent: [string, string]; // Removing locale since it's not imported
  callback?: () => void;
}

interface ILinkMenuBlock {
  title: [string, string]; // Removing locale since it's not imported
  items: ILinkMenuListItem[];
 
}

export const sideMenuList: ILinkMenuBlock[] = [
 
  {
    title: ['common', 'mainMenu'],
    items: [
      { icon: HomeIcon, route: homePageRoute,  textIdent: ['common', 'home'],},
      { icon: SearchIcon, route: searchPageRoute, textIdent:['common','search'], },
      { icon: AddIcon, route: addPageRoute, textIdent: ['common','addPost'], },
      { icon: FavoriteIcon, route: favoritePageRoute, textIdent: ['common','favorite'], },
      { icon: ProfileIcon, route: profilePageRoute, textIdent: ['common','profile'], },
     
    ],
  },

  // {
  //   title: ['common', 'marketingTools'],
  //   id:[1],
  //   items: [
  //     { icon: ProfileIcon, route: profilePageRoute, textIdent: ['common','profile'], },
  //   ],
  // },
  // {
  //   title: ['common', 'reports'],
  //   items: [
  //     { icon: FavoriteIcon, route: favoritePageRoute, textIdent: ['common','favorite'], },
  //     { icon: ProfileIcon, route: profilePageRoute, textIdent: ['common','profile'], },
  //   ],
  // },
];

export const getActiveMenuTitle = (pathname: string): ILinkMenuListItem | undefined => {
  for (const block of sideMenuList) {
    const activeItem = block.items.find(item => item.route === pathname);
    if (activeItem) return activeItem;
  }
  return undefined;
};