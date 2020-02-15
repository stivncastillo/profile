import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ProfileImage from "../images/stiven.jpg"

export default () => (
  <Layout>
    <SEO title="Home" />
    <section className="section section-main">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="CardProfile">
              <div className="row">
                <div className="col-2">
                  <div className="CardProfile-image">
                    <img src={ProfileImage} alt="Stiven Castillo" />
                  </div>
                </div>
                <div className="col-10 CardProfile-resume-container">
                  <div className="CardProfile-resume">
                    <h1>Hi, I'm Stiven Castillo</h1>
                    <h2>
                      I <span>Design</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="Profile-resume">
              <p>
                Full stack Developer with about +9 years creating and developing
                things for web and mobile devices. I've worked with Laravel,
                React/ReactNative, Nodejs, among others Back and Front end
                technologies.
              </p>
              <p>
                Focused to learn more about UX/UI design, web and mobile app
                design. Passionate about technology and design, speaker and
                active participant of the communities like{" "}
                <a
                  href="https://twitter.com/gdgcali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @GDGCali
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/CalicoJS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @CaliJs
                </a>
                . Able to work in awesome projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
