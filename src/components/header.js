import React, { useState} from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql } from "gatsby"
import { FaTripadvisor } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
// import globalHook from 'use-global-hook';

// const initialState = {
//   initialLang: 0,
// }

// const actions = {
//   switchLang: (store, change) => {
//     const newLangValue = store.state.initialLang = change;
//     store.setState({ initialLang: newLangValue });
//   },
// };

// const useGlobal = globalHook(React, initialState, actions);

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



  // const [globalState, globalActions] = useGlobal();

  return (
  <>
  <header className={`mobileHeader ${props.navActive ? "menu-open" : "menu-closed"}`}>

  <nav className={`nav-mobile`}>

    <ul id="nav-items-list">
        <li>
          <a>{props.langChosen ? data.LangEN.home : data.LangPL.home}</a>
        </li>
        <li>
          <a>{props.langChosen ? data.LangEN.menu : data.LangPL.menu}</a>
        </li>
        <li>
          <a>{props.langChosen ? data.LangEN.location : data.LangPL.location}</a>
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
