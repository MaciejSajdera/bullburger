import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const TermsSectionWelcome = (props) => {

  const data =  useStaticQuery(graphql`
  query TermsQuery {
    file(relativePath: {eq: "main-photo-optimized.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 3080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

 return (
  <section className={`terms-section`}>
    
    <h1>{props.langChosen ? props.data.LangEN.header : props.data.LangPL.header}</h1>

    <div>{props.langChosen ? props.data.LangEN.content : props.data.LangPL.content}</div>

  </section>
 )
}

export default TermsSectionWelcome



