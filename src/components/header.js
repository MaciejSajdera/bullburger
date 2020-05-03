import React, { Fragment } from 'react';
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

    // const { width } = useWindowDimensions();

    // const isMobile = width < 1000;

    // return isMobile ? <MobileHeader {...props} data={data} scrollTo={scrollTo}/> : <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>


    //REACT MEDIA
    //https://github.com/ReactTraining/react-media

    return (
            <>
        <Media queries={{
          small: "(max-width: 999px)",
          large: "(min-width: 1000px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <MobileHeader {...props} data={data} scrollTo={scrollTo}/>}
              {matches.large && <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>}
            </Fragment>
          )}
        </Media>
            </>
    ) 


  } 

  export default Header


