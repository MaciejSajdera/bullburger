import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"
import scrollTo from 'gatsby-plugin-smoothscroll'

const maxMobile = `screen and (max-width: 1000px)`

export default function Header(props) {

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
    if (typeof window !== `undefined`) {
      const query = true
    } else {
      const query = window.matchMedia(maxMobile)
      return query
    }

    const [match, setMatch] = useState(query.matches)
    
    useEffect(() => {
      const handleMatch = q => setMatch(q.matches)
      query.addListener(handleMatch)
      return () => query.removeListener(handleMatch)
    })

    return match ? <MobileHeader {...props} data={data} scrollTo={scrollTo}/> : <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>


  } 



