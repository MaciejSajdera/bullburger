import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Media from 'react-media';

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

    //REACT MEDIA
    //https://github.com/ReactTraining/react-media

    return (
      
        <>
        <Media query="(max-width: 999px)" defaultMatches={true}>
          {matches =>
            matches ? (
              <MobileHeader {...props} data={data} scrollTo={scrollTo} />
            ) : (
              <DesktopHeader {...props} data={data} scrollTo={scrollTo} />
            )
          }
        </Media>
        </>
    ) 


  } 

  export default Header


