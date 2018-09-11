import React from 'react'
import { connect } from 'react-redux'
import '../css/Menu.css'
import {slide as MenuSlide} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';




const Menu = (props) => {
  const BurgerMenu = reduxBurgerMenu(MenuSlide)
  return (
    <BurgerMenu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </BurgerMenu>
  )
}

// 2. we map dispatch to props `notify` async action creator
//    here we use a shortcut instead of passing a `mapDispathToProps` function
export default connect()(Menu)
