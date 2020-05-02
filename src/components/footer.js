import React from "react"
import "../styles/footer.scss"
import { useStaticQuery, graphql } from "gatsby"

export const Footer = (props) => {

  const data = useStaticQuery(graphql`
  query MyFooterQuery {
    LangPL: datoCmsFooterInfo(locale: {eq: "pl"}) {
      footerSlogan
      footerTitle
    }
    LangEN: datoCmsFooterInfo(locale: {eq: "en"}) {
      footerSlogan
      footerTitle
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
          </div>
          </div>
  </footer>
 )
}

export default Footer
