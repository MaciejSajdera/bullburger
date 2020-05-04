import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet"
import "../styles/goorder.scss"
 
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#___gatsby')
 
export default function OrderButtonModal(){
  // const [modalIsOpen,setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }
 
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   console.log("modal closed")
  // }
 
  // function closeModal(){
  //   setIsOpen(false);
  // }
 
    return (
      <div>

      <Helmet>
      <script src="https://store.goorder.pl/goorder.js"></script>
      <script src="https://store.goorder.pl/goorder.js"></script>
      </Helmet>
      

      <button id={`goorderButton`} className={`goorder`} data-goorder-open data-goorder-modal="1" data-src="https://bullpub.goorder.pl">

        <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543997-goorder-icon-dark.png"></img>

        {/*        //warunkowo zmiana z bialego na czarne
        {props.navScrolled ? <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543997-goorder-icon-dark.png"></img> : <img id={`widget-logo`} src="https://www.datocms-assets.com/      26240/1588543443-goorder-icon.png"></img>} */}

        </button>

        {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className={`goorder`}
          data-src="https://bullpub.goorder.pl/widget">
        > */}
          {/* <div className={`goorder`} data-src="https://bullpub.goorder.pl/widget"></div> */}
{/* 
        </Modal> */}
      </div>
    );
}

// ReactDOM.render(<OrderButtonModal />, document.getElementById("___gatsby"));


