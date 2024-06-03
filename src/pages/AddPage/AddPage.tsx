import { block } from 'bem-cn'
import React from 'react'
const b = block('home-page')
const AddPage: React.FC = () =>
   (
    <div className={b()}>
        <h1 style={{color:'blue'}}>add advertisements</h1>
    </div>
  )


export default AddPage
