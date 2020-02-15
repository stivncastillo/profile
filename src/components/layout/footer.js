import React from "react"

const Footer = () => (
  <footer className="Footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 order-2 order-sm-6">
          <div className="Footer-copy">
            <p>© 2020. Built with Gatsby</p>
          </div>
        </div>
        <div className="col-sm-6 order-1 order-sm-6">
          <div className="Footer-social">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/bacabange"
              >
                <i className="fab fa-dribbble"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/bacabange"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bacabange"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/stivncastillo"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/stivncastillo/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.com/bacabange/"
              >
                <i className="fab fa-behance"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:stivencastillo.90@gmail.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
