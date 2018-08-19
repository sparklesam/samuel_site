import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';

export default function Template({data, pathContext}) {
    const post = data.markdownRemark

    return(
        <div>
            <div className="BlogContainer">
                <Link to="/blog">Go Back </Link>
                <h1>{post.frontmatter.title}</h1>
                <small>Published on {post.frontmatter.date} in {post.frontmatter.tags.map((tag, index) => {
                    return (
                        <span key={index} className="tag">
                            <Link to={`tags/${tag}`}
                                  >
                            {tag}</Link>
                        </span>
                    )
                })}</small> 
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
            <Footer />
        </div>
    ) 
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                date
                tags
            }
        }
    }
`

