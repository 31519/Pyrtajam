
import React from 'react'
import style from './TitleSmall.module.css'

function TitleSmall({title}) {
  return (
    <div >
        <h2 className={style.title}>{title}</h2>
    </div>
  )
}

export default TitleSmall