import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import './index.css'

const Layout = ({ children, data }) => (
  <section className="">
    <div className="Layout">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'keywords', content: 'Design, Technology, Blog' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <NavBar></NavBar>
      {children()}
    </div>
    <footer><Footer /></footer>
  </section>
  
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`