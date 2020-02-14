import React from "react"
import TwitterIcon from "../../images/svg/twitter.svg"
import InstagramIcon from "../../images/svg/instagram.svg"
import DribbleIcon from "../../images/svg/dribbble.svg"
import GithubIcon from "../../images/svg/github.svg"
import BehanceIcon from "../../images/svg/behance.svg"
import MailIcon from "../../images/svg/mail.svg"
import LinkedinIcon from "../../images/svg/linkedin.svg"

const Footer = () => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer-container">
        <div className="Footer-copy">
          <p>© 2020. Build with Gatsby</p>
        </div>
        <div className="Footer-social">
          <a target="_blank" href="https://dribbble.com/bacabange">
            <i class="fab fa-dribbble"></i>
          </a>
          <a target="_blank" href="https://twitter.com/bacabange">
            <i class="fab fa-twitter"></i>
          </a>
          <a target="_blank" href="https://github.com/bacabange">
            <i class="fab fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/stivncastillo">
            <i class="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/stivncastillo/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.behance.com/bacabange/">
            <i class="fab fa-behance"></i>
          </a>
          <a target="_blank" href="mailto:stivencastillo.90@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
