import { NavLink } from 'react-router-dom'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="mainHeader">
          <NavLink to="/">Букинист</NavLink>
        </div>
        <input
          className="inputHeader"
          type="search"
          placeholder="Поиск по странице"
        />

        <div className="linkHeader">
          <NavLink to="/shop">Магазин</NavLink>
        </div>
      </header>
    </>
  )
}

export default Header
