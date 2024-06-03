import { block } from 'bem-cn'
import React from 'react'
const b = block('home-page')
const FavoritePage: React.FC = () =>
   (
    <div className={b()}>
        <div className={b('title')}>
        Favorite
        </div>
    </div>
  )


export default FavoritePage
