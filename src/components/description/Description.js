import React from 'react'
import style from "./Description.module.css"

function Description({description , more=""}) {
  return (
    <div>
        <p className={style.text}>{description}{more}</p>
    </div>
  )
}

export default Description