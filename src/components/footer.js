import React from "react"
import "../styles/footer.scss"

export const Footer = () => {

 return (
  <footer>
        <div className={`footer-cover`}>
          <div className={`footer-content`}>
          © {new Date().getFullYear()} <br />
          BULL BURGER GRILL <br />
          NAJLEPSZE BURGERY W KRAKOWIE
          </div>
          </div>
  </footer>
 )
}

export default Footer
