import React from 'react'
import style from './css/generalStyling.module.css'

const BaseCard = (props) => {
  return (
    <div className={style.wrapper}>
        <div className={style.modalClass}>
            <div className={style.cancel} >
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default BaseCard