import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/menu.scss"

import MainMenu from "./main-menu"
import ExtraMenuInfo from "./extra-menu-info"

export const Menu = () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsMenu {
      menuHeader
      menuSlogan
    }
  }
  `)

 return (
  <section id="menu" class="menu-section">
    <div class="menu-wrapper">

      <h4>
        {data.datoCmsMenu.menuSlogan}
      </h4>

      <h2>
        {data.datoCmsMenu.menuHeader}
      </h2>

        <MainMenu />

        <ExtraMenuInfo />

    </div>
  </section>
 )
}

export default Menu



