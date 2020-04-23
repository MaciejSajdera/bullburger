import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"

export const SectionWelcome = () => {

  const data =  useStaticQuery(graphql`
  query MainPhoto {
      datoCmsMainPhoto {
        mainPhoto {
          fluid(imgixParams: {auto: "compress", fm: "jpg"}) {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
      }
  }
`)

 return (
  <section id="section-welcome" class="first-section">
    <Img fluid={data.datoCmsMainPhoto.mainPhoto.fluid} />
  </section>
 )
}

export default SectionWelcome



