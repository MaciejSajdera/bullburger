import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"
import scrollTo from 'gatsby-plugin-smoothscroll'

function getWindowDimensions() {
  //for SSR rendering
  if (typeof window === `undefined`) {
      let width = 1000;
      let height = 1000
      return {
        width,
        height
      };
  } 
  
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


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
      //for SSR production
    // if (typeof window === `undefined`) {
    //   var query = true
    // } else {
    //   var query = window.matchMedia(maxMobile)
    // }

    // const [match, setMatch] = useState(query.matches)
    
    // useEffect(() => {
    //   const handleMatch = q => setMatch(q.matches)
    //   query.addListener(handleMatch)
    //   return () => query.removeListener(handleMatch)
    // })

    const { width } = useWindowDimensions();

    const isMobile = width < 1000;

    return isMobile ? <MobileHeader {...props} data={data} scrollTo={scrollTo}/> : <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>


  } 

  export default Header


