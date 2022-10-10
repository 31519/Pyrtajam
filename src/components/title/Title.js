

import React from 'react'
import style from './Title.module.css'

function Title({title}) {
  return (
    <div >
        <h2 className={style.title}>{title}</h2>
    </div>
  )
}

export default Title