import { block } from 'bem-cn'
import React from 'react'
import './SearchPage.scss'
const b = block('search-page')
const SearchPage: React.FC = () =>
   (
    <div className={b()}>
        <h1>Pofile</h1>
        <div className={b('title')}>Что вы хотите сделать?</div>
        <div className={b('button')}>
        </div>
    </div>
  )


export default SearchPage
