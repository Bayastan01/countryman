import { block } from 'bem-cn'
import React from 'react'
const b = block('home-page')
const SearchPage: React.FC = () =>
   (
    <div className={b()}>
        <div className={b('title')}>SearchPage</div>
    </div>
  )


export default SearchPage
