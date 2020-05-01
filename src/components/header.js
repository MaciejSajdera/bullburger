import React from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql } from "gatsby"
import { FaTripadvisor } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = (props) => {

  const data = useStaticQuery(graphql`

  query MyNavQuery {
    LangPL: datoCmsNavMobile(locale: {eq: "pl"}) {
      home
      menu
      location
    }

    LangEN: datoCmsNavMobile(locale: {eq: "en"}) {
      home
      menu
      location
    }
  }
  `)


  return (
  <>
  <header className={`mobileHeader ${props.navActive ? "menu-open" : "menu-closed"}`}>

  <nav className={`nav-mobile`}>

    <ul id="nav-items-list">
        <li>
          <a onClick={() => {
                            scrollTo('#welcome');
                            props.setNavState(false)
                            }
                          
          }>{props.langChosen ? data.LangEN.home : data.LangPL.home}</a>
        </li>
        <li>
          <a onClick={() => {
                            scrollTo('#menu');
                            props.setNavState(false)
                            }
                          
        }>{props.langChosen ? data.LangEN.menu : data.LangPL.menu}</a>
        </li>
        <li>
          <a onClick={() => {
                            scrollTo('#location');
                            props.setNavState(false)
                            }
                          
        }>{props.langChosen ? data.LangEN.location : data.LangPL.location}</a>
        </li>
    </ul>

    <nav className={`nav-sub`}>
      <ul id="nav-sub-list">
        <li>
          <a onClick={() => props.setLang(false)}>PL</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a onClick={() =>  props.setLang(true)}>EN</a>
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


  <header>

  </header>
  </>
  )
}


export default Header
