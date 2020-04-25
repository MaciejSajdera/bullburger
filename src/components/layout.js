/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState} from 'react';
import { useStaticQuery, graphql } from "gatsby"
// import globalHook from 'use-global-hook';


import Header from "./header"
import SectionWelcome from "./section-welcome"
import Menu from "./menu"
import "./layout.css"
import "../styles/styles.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [navActive, setNavState] = useState(false)

  return (
    <>
          <div id="button-nav-mobile" onClick={() => setNavState(!navActive)}>
          <svg className={`ham hamRotate ham8 ${navActive ? "active" : ""}`}
            viewBox="0 0 100 100" width="65" >
            <path
            className={`line top`}
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
            <path
            className={`line middle`}
            d="m 30,50 h 40" />
            <path
            className={`line bottom`}
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
          </svg>
         </div>

      <Header navActive={navActive}/>

      <SectionWelcome />
      <Menu />

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}


export default Layout
