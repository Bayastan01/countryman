
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import './index.scss'
import  {createRoutes}  from './modules/createRoutes.tsx'
import {
  HomePageModule,
  ProfilePageModule,
  FavoritePageModule,
  AddPageModule,
  SearchPageModule
} from './modules/index.tsx'
import { configureAppStore } from './setup/store.ts'
import { Provider } from 'react-redux'
const modules = [
  new HomePageModule(),
  new FavoritePageModule(),
  new AddPageModule(),
  new SearchPageModule(),
  new ProfilePageModule(),
]
const { store } = configureAppStore()
const childrens = createRoutes(modules)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App>{childrens}</App>
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
)
