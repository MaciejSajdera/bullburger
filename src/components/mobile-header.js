import React from "react"
import "../styles/mobile-header.scss"
import { FaTripadvisor } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import HamburgerButton from "./hamburger-button"


const MobileHeader = (props) => {

  return (
  <>
  <HamburgerButton {...props} />

  <header className={`mobile-header ${props.navActive ? "menu-open" : "menu-closed"}`}>

  <nav className={`nav-mobile`}>

    <ul id="nav-items-list">
        <li>
          <a onClick={() => {
                            props.scrollTo('#welcome');
                            props.setNavState(false)
                            }
                          }
                          className={`${props.langChosen ? "english" : "polish"}`}
                          >
                            {props.langChosen ? props.data.LangEN.home : props.data.LangPL.home}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#menu');
                            props.setNavState(false)
                            }
                          }
                          className={`${props.langChosen ? "english" : "polish"}`}
                          >
                            {props.langChosen ? props.data.LangEN.menu : props.data.LangPL.menu}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#location');
                            props.setNavState(false)
                            }
                          }
                          className={`${props.langChosen ? "english" : "polish"}`}
                          >
                            {props.langChosen ? props.data.LangEN.location : props.data.LangPL.location}</a>
        </li>
    </ul>

    <nav className={`nav-sub`}>
      <ul id="nav-sub-list">
        <li>
          <a onClick={() => props.setLang(false)} className={`${props.langChosen ? "" : "lang-clicked"}`} >PL</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a onClick={() =>  props.setLang(true)} className={`${props.langChosen ? "lang-clicked" : ""}`} >EN</a>
        </li>
      </ul>
    </nav>

    <div id="social-media-icons">
          <a href="https://www.facebook.com/bullburgerkrakow/">
            <FaFacebook />
          </a>
      <span></span>
          <a href="https://pl.tripadvisor.com/Restaurant_Review-g274772-d10057087-Reviews-BULL_Burger_GRILL-Krakow_Lesser_Poland_Province_Southern_Poland.html">
            <FaTripadvisor />
          </a>
    </div>

  </nav>
  </header>
  </>
  )
}


export default MobileHeader
