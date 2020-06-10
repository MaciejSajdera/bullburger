import React from "react"
import "../styles/footer.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import PepLogo from "../images/pep.inline.svg"

export const Footer = (props) => {

  const data = useStaticQuery(graphql`
  query MyFooterQuery {
    LangPL: datoCmsFooterInfo(locale: {eq: "pl"}) {
      footerSlogan
      footerTitle
      footerLink
    }
    LangEN: datoCmsFooterInfo(locale: {eq: "en"}) {
      footerSlogan
      footerTitle
      footerLink
    }
  }
  `)

  let allData;
  props.langChosen ? allData = data.LangEN : allData = data.LangPL;

 return (
  <footer>
        <div className={`footer-cover`}>
          <div className={`footer-content`}>
          © {new Date().getFullYear()} <br />
          {allData.footerTitle} <br />
          {allData.footerSlogan}
          <PepLogo />
          <Link to="/terms">{allData.footerLink}</Link>
          </div>
          </div>
  </footer>
 )
}

export default Footer
