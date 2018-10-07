import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import Img from 'gatsby-image'
import Seo from '../components/seo';
import FaArrowRight from 'react-icons/lib/fa'
import Author from '../components/author'
import CTA from '../components/cta'


export default function Template({data, pathContext}) {
    const post = data.markdownRemark
    const {next, prev} = pathContext;

    return(
        <div>
            <div className="PortfolioBg">
            <div claassName="Overlay">  </div>
            <Img className="ContentWide Container" sizes={post.frontmatter.image.childImageSharp.sizes} />
            </div>
            <Seo data={post} />
            <div className="Padding-S Container">
                <div className="Content">
                <small>{post.frontmatter.category}</small>
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>

                
                
                <div className="BlogContent" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                <div className="BlogNavigate">
                <div className="Previous">
                    {prev &&
                        <Link to={prev.frontmatter.path}>← Previous</Link>
                    }
                    </div>
                    <div className="Next" >
                    {next &&
                        <Link to={next.frontmatter.path}>Next → </Link>}
                    </div >
                </div>
            </div>
            </div>
        </div>
    ) 
}
            {/*`/work${edge.node.frontmatter.path}`*/}
            {/*frontmatter: { posttype: { eq: "project" }}*/}
            {/*($path: String!)*/}

export const projectQuery = graphql`
query ProjectPostByPath($path: String!) {
    markdownRemark(
        frontmatter: { path: { eq:  $path} })
    {
        html
        excerpt(pruneLength: 250)
        frontmatter {
            path
            title
            date(formatString: "YYYY MMMM", locale: "en")
            tags
            subtitle
            category
            image {
                publicURL
                size 
                childImageSharp {
                    sizes(maxWidth: 1140) {
                        ...GatsbyImageSharpSizes_withWebp
                    }
                }
            } 
        }
      }
    }

`
