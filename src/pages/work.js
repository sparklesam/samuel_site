import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import HeroProjectLogo from '../images/HeroProject.svg'
import styled from 'styled-components'
import MajorButton from '../components/majorbutton'
import { Zoom, Slide, Fade } from 'react-reveal'

const ProjectTitleWrapper = styled.div`
    max-width: 70%;
    margin-bottom: 5vh;

    @media (max-width: 700px) {
        max-width: 100%;
    }
`

const ProjectContentWrapper = styled.div`
    max-width: 70%;   

    @media (max-width: 700px) {
        max-width: 100%;
    } 
`

const ProjectPhoto = styled.div`

`

const ProjectTitle = styled.h2`
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 0.75rem;
`

const ProjectSubtitle = styled.h5`
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 0.75rem;

    @media (max-width: 700px) {
        display: none;
    }
` 

const ProjectInfo = styled.div`
  small {
    color: #fff;
    opacity: 0.7;
  }
`

const ProjectCategory = styled.small`
    .category:not(:last-child) { 
      margin-right: 8px;
    }
`

const ProjectDate = styled.small`
`

const ProjectIntro = styled.p`
    color: #fff;
`

const WorkPage = ({ data }) => (
    <div>
    <Seo data="" />
    <Helmet title={`Work | Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com/work', },
      ]}>
    </Helmet>

    <div className="SelectedWork">
    <div className="HeroIcon">
        <div className="HeroIconWrapper Padding-S">
            <img src={HeroProjectLogo} alt="BlogLogo" width="100px" height="100px"></img>
            <h2>Work</h2>
            <div className="Container CenterContainer"><p className="Grey Width-70">My selected recent works, for more up-to-date work and design titbit. Feel free to follow my Behance and Twitter.</p></div>
        </div>
    </div>
    <div className=""> 
          <div className="">
          {data.PortfolioIndex.edges.map(post => (
              <section className="Full-Width PortfolioIndex" style={{ backgroundColor: `${post.node.frontmatter.color}`}}>
                <Zoom><div className="Container">
                <ProjectPhoto className="Top-S">
                    <Link to={post.node.frontmatter.path}>
                    <Img className="PortfolioIndexPhoto" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                    </Link>
                </ProjectPhoto>
                <div className="TextCenter Padding-XS CenterContainer">
                <ProjectTitleWrapper>
                  <div className="PortfolioIndexTitle ">
                    
                    <ProjectTitle>{post.node.frontmatter.title}</ProjectTitle>
                    <ProjectSubtitle>{post.node.frontmatter.subtitle}</ProjectSubtitle>
                    <ProjectInfo><ProjectCategory>{post.node.frontmatter.category.map((category, index) => {
                      return (<span key={index} className="category">{category}</span>)})
                    }</ProjectCategory><ProjectDate> | {post.node.frontmatter.date}</ProjectDate></ProjectInfo>
                    
                  </div>
                  </ProjectTitleWrapper>
                  <ProjectContentWrapper>
                  <div className="PortfolioIndexContent">
                    <ProjectIntro>{post.node.frontmatter.intro}</ProjectIntro>
                    <MajorButton href={post.node.frontmatter.path} text={"View Project"}></MajorButton>
                  </div>
                  </ProjectContentWrapper>
                </div>
                
                </div>
                
              <div>
              </div>
              </Zoom></section>
          ))}
          </div>
    </div>
    </div>
    </div>
)

export const pageQuery = graphql`
query WorkPage {
    front: file(relativePath: { eq: "/images/sprite_30fps.svg" }) {
      childImageSharp {
        sizes(maxWidth: 1440) {
          srcSet
        }
      }
    }
    PortfolioIndex: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {posttype: {eq: "project"}}}, limit: 20) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            color
            path
            title
            date(formatString: "YYYY MMMM", locale: "en")
            tags
            subtitle
            intro
            category
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
  `
  
  export default WorkPage
  