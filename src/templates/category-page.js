import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import config from '../config';

const TagPage = ({ pathContext, data}) => {
  const { category } = pathContext;
  const tagHeader = `${category}`;
  const HelmetTitle = "My " + pathContext.category + " work | " + config.shortSiteTitle;
  const HelmetURL = config.siteUrl + "/category/" + kebabCase(pathContext.category);

  
  return (
    <div className="Container Padding-S">
       <Seo data=""></Seo>
       <Helmet 
        title={HelmetTitle}
        meta={[
          { property: 'og:title', content: `${HelmetTitle}`},
          { property: 'og:url', content: `${HelmetURL}`},
        ]}
         />
        <section className="Top-S">
        <Link to="../">Back</Link> 
        <h1 className="Tax-Title">{tagHeader} </h1>
        {data.allMarkdownRemark.edges.map(post => (
            
            <div key={ post.node.id }>
                <div className="Grid50">
                <Img className="" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                
                <div>
                <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                <p>{post.node.excerpt}</p>
                <small>Published on {post.node.frontmatter.date} </small>
                <br />
                <br />
                </div>
                </div>
            </div>
        ))}
        </section>

    </div>
);
};

TagPage.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
};

export default TagPage


export const pageQuery = graphql`
query PostByCategory($category: String!) {
  allMarkdownRemark(
    filter: { frontmatter: { category: { eq: $category }} }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        html
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          tags
          path
          image {
            childImageSharp {
              sizes(maxWidth: 1140) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
}
`;

