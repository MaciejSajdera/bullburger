import React from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql } from "gatsby"
import { FaTripadvisor } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

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
          <a>{data.LangPL.home}</a>
        </li>
        <li>
          <a>{data.LangPL.menu}</a>
        </li>
        <li>
          <a>{data.LangPL.location}</a>
        </li>
    </ul>

    <nav className={`nav-sub`}>
      <ul id="nav-sub-list">
        <li>
          <a>PL</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a>EN</a>
        </li>
      </ul>
    </nav>

    <div id="social-media-icons">
      <FaFacebook />
      <span></span>
      <FaTripadvisor />
    </div>

  </nav>


  </header>


  <header>

  </header>
  </>
  )
}


export default Header
