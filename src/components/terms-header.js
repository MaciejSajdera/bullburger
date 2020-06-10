import React from "react"
import "../styles/desktop-header.scss"
import { Link } from "gatsby"

const TermsDesktopHeader = (props) => {

  return (
  <>

  <header className={`desktop-header terms-header`}>

  <div className="back-to-home">
      <Link to="/">{props.langChosen ? props.data.LangEN.backToHomePage : props.data.LangPL.backToHomePage}</Link> 
  </div>

    <nav className={`desktop-side-nav terms-nav`}>
      <ul id="nav-side-list" className={`terms-lang`}>
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

  </header>
  </>
  )
}


export default TermsDesktopHeader
