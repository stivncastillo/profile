import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <section className="section section-main">
        <h1>Blog</h1>
        <p>
          You can read my posts in{" "}
          <a
            href="https://medium.com/@bacabange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          . Thank you.
        </p>
      </section>
      {/* <section className="section">
        <h1>Blog</h1>
      </section> */}
    </div>
  </Layout>
)
