import React from "react"
// import {Helmet} from "react-helmet"
import "../styles/goorder.scss"

export const OrderButtonModal = () => {
  return (
    <div id={`widget-modal-wrapper`}>
      {/* <Helmet>
      <script src="https://store.goorder.pl/goorder.js"></script>
      </Helmet> */}

      <a
        id={`goorderButton`}
        className={`goorder`}
        href="https://bullburger.ordersmart.pl/2354"
        target="_blank"
      >
        <img
          id={`widget-logo`}
          src="https://www.datocms-assets.com/26240/1606151740-order-smart-logo-retina-2x-1.png"
        ></img>

        {/*        //warunkowo zmiana z bialego na czarne
        {props.navScrolled ? <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543997-goorder-icon-dark.png"></img> : <img id={`widget-logo`} src="https://www.datocms-assets.com/      26240/1588543443-goorder-icon.png"></img>} */}
      </a>
    </div>
  )
}

export default OrderButtonModal
