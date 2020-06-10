import React, { useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import TermsSectionWelcome from "../components/terms-section-welcome"
import Footer from "../components/footer"
import TermsHeader from "../components/terms-header";

import "../components/layout.css"
import "../styles/styles.scss"
import "../styles/terms.scss"
import "../styles/section-welcome.scss"


const TermsOfUse = () => {

    const data = useStaticQuery(graphql`

    query MyTermsQuery {
        LangPL: datoCmsTerm(locale: {eq: "pl"}) {
          backToHomePage
          header
          content
        }
      
      LangEN: datoCmsTerm(locale: {eq: "en"}) {
        backToHomePage
        header
        content
      }
    }
    `)

  const [langChosen, setLang] = useState(false)

  const langProps = {
    langChosen: langChosen,
    setLang: setLang
  }

  return (
    <>
      <TermsHeader data={data} {...langProps}/>

      <TermsSectionWelcome data={data} {...langProps}/>

      <Footer {...langProps}/>
    </>


  )
}


export default TermsOfUse