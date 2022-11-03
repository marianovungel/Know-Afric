import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='Menu'>
        <div className="menuvazio">
            <img src="./image/sf1.png" className='imgAfricMenu' alt=" " />
        </div>
        <div className="menuList">
            <i className="listMenu">Estudar</i>
            <i className="listMenu">Sugerir Questão</i>
            <i className="listMenu">Jogar</i>
        </div>
    </div>
  )
}
