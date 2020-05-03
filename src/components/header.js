import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import MobileHeader from "./mobile-header"
import DesktopHeader from "./desktop-header"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Media from 'react-media';
import { UserAgent } from 'react-useragent';
import { createMedia } from "@artsy/fresnel"


const Header = (props) => {

  // const { MediaContextProvider, Media } = createMedia({
  //   breakpoints: {
  //     mobile: 0,
  //     desktop: 1024,
  //   },
  // })

  
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

        <Media query={{ minWidth: 1000 }}>
          {matches =>
            matches ? (
              <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>
            ) : (
              <MobileHeader {...props} data={data} scrollTo={scrollTo} />
            )
          }
        </Media>


{/* <MediaContextProvider>
    <Media at="mobile">
    <MobileHeader {...props} data={data} scrollTo={scrollTo} />
    </Media>
    <Media greaterThanOrEqual="desktop">
    <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>
    </Media>
  </MediaContextProvider> */}




        {/* <UserAgent>
        {({ ua }) => {
          return ua.mobile ? <MobileHeader {...props} data={data} scrollTo={scrollTo}/> : <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>
        }}
        </UserAgent> */}

                {/* <Media
                    queries={{ medium: "(max-width: 999px)" }}
                    defaultMatches={{ medium: state.device === 'mobile' }}
                    render={() => <MobileHeader {...props} data={data} scrollTo={scrollTo}/>}
                  />

                  <Media
                    queries={{ medium: "(min-width: 1000px)" }}
                    defaultMatches={{ medium: state.device === 'desktop' }}
                    render={() => <DesktopHeader {...props} data={data} scrollTo={scrollTo}/>}
                  /> */}

{/* 
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
        </Media> */}
            </>
    ) 


  } 

  export default Header


