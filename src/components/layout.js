import React, { useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Header from "./header"
import OrderButton from "./order-button"
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
    let firstOffsetTop = document.getElementById('menu').offsetTop;
    let firstOffsetTopFormatted = (-firstOffsetTop+30);

    const isScrolled = currPos.y < firstOffsetTopFormatted
    if (isScrolled !== navScrolled) changeNav(isScrolled)
  }, [navScrolled])


  const commonProps = {
    setNavState: setNavState,
    navActive: navActive,
    navScrolled: navScrolled,
    changeNav: changeNav,
    useScrollPosition: useScrollPosition
  }

  const langProps = {
    langChosen: langChosen,
    setLang: setLang
  }

  return (
    <>

      <Header {...commonProps} {...langProps}/>

      <OrderButton {...langProps} navScrolled={navScrolled}/>

      <SectionWelcome />

      <Menu {...langProps}/>

      <Location {...langProps} />

      <LeafletMap />

      <Footer {...langProps}/>
    </>


  )
}


export default Layout
