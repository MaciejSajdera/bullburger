import React, { useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import HamburgerButton from "./hamburger-button"
import Header from "./header"
import SectionWelcome from "./section-welcome"
import Menu from "./menu"
import Location from "./location"
import LeafletMap from "./leaflet-map"
import Footer from "./footer"

import "./layout.css"
import "../styles/styles.scss"


const Layout = () => {

  const [navActive, setNavState] = useState(false)

  const [langChosen, setLang] = useState(false)

  const [navScrolled, changeNav] = useState(false)

  useScrollPosition(({ currPos }) => {
    const isScrolled = currPos.y < -780
    if (isScrolled !== navScrolled) changeNav(isScrolled)
  }, [navScrolled])

  return (
    <>
      <HamburgerButton setNavState={setNavState} navActive={navActive} useScrollPosition={useScrollPosition} navScrolled={navScrolled} changeNav={changeNav}/>

      <Header setNavState={setNavState} navActive={navActive} langChosen={langChosen} setLang={setLang}/>

      <SectionWelcome />

      <Menu langChosen={langChosen} setLang={setLang}/>

      <Location langChosen={langChosen} setLang={setLang} />

      <LeafletMap />

      <Footer />
    </>


  )
}


export default Layout
