import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"
import BbgSvgLogo from "../images/bbg-logo.inline.svg"
import ArrowLogo from "../images/arrow.inline.svg"
import scrollTo from 'gatsby-plugin-smoothscroll'

export const SectionWelcome = () => {

  const data =  useStaticQuery(graphql`
  query MyQuery {
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
  <section id={`welcome`} className={`first-section`}>
    <Img fluid={data.file.childImageSharp.fluid} />
    <div className={`bbg-logo`}>
      <BbgSvgLogo />
    </div>
    <div className={`scroll-icon`} onClick={() => scrollTo('#menu')}>
      <ArrowLogo />
    </div>
  </section>
 )
}

export default SectionWelcome



