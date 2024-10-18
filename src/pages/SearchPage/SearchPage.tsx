import { block } from 'bem-cn'
import React from 'react'
import './SearchPage.scss'
import Explore from 'components/Explore/Explore'
const b = block('search-page')
const SearchPage: React.FC = () =>
   (
    <div className={b()}>
       <Explore/>
    </div>
  )


export default SearchPage
