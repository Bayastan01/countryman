import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PersistConfig,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as SideMenuFeature from '../features/sideMenu';
import * as LocaleFeature from '../features/locale'
import * as AuthFeature from '../features/auth'

import { Persistor } from 'redux-persist/es/types'

export interface IApplicationState {
  auth: AuthFeature.types.IAuthState
  sideMenu: SideMenuFeature.types.ISideMenuState;
  locale: LocaleFeature.types.ILocaleState
  
}

const persistConfig: PersistConfig<IApplicationState> = {
  key: 'partner',
  storage,
  whitelist: ['sideMenu','auth','locale'],
};

type ConfigureStore = {
  store: ReturnType<typeof configureStore>;
  persistor: Persistor


};

export function configureAppStore(): ConfigureStore {

  const reducer = combineReducers({
    auth: AuthFeature.reducer,
    sideMenu: SideMenuFeature.reducer,
    locale: LocaleFeature.reducer,
  });

  const persistedReducer = persistReducer(persistConfig, reducer);


  // Use Redux Toolkit's configureStore function
  const store = configureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(store)

  return { store,persistor };
}
