import React from "react"
import {Helmet} from "react-helmet"
import "../styles/goorder.scss"

const OrderButton = () => {

    return (
      <>
      <Helmet>
      <script src="https://store.goorder.pl/goorder.js"></script>
      </Helmet>
      <button id={`goorderButton`} className={`goorder`} data-goorder-open class="goorder" data-goorder-modal="1" data-src="https://bullpub.goorder.pl">

      <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543997-goorder-icon-dark.png"></img>
 
        {/*        //warunkowo zmiana z bialego na czarne
        {props.navScrolled ? <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543997-goorder-icon-dark.png"></img> : <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543443-goorder-icon.png"></img>} */}
        
        </button>
      </>
    );
  
}

export default OrderButton
