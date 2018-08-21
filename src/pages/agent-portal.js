import React          from "react"
import AgentPortal      from "../components/AgentPortal"
import styled         from "styled-components";
import { textStyles } from '../styles/vars'

const Portal = function( {data} ) {
	return(
		<div>
			<div className="wrapper padd">
				<H1>Agent Portal</H1>
			</div>
      <Hr />
		  <TextWrapper>
        {data.portals.edges.map((portal, index) => (
          <AgentPortal
            key={index}
            src={portal.node.frontmatter.src}
            title={portal.node.frontmatter.title}
            text={portal.node.excerpt}
            to={portal.node.frontmatter.link}
          />
        ))}
      </TextWrapper>

		</div>
	)
}



export default Portal

export const PortalQuery = graphql`
  query PortalsPageQuery {
    portals: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date]},
      filter: {
        fields: {
          slug: {
            regex: "/^/portals//m"
          }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
						src
						link
          }
          excerpt
        }
      }
    }
  }
`

const H1 = styled.h1`
  ${textStyles.h1}
  color:#000;
  padding-top:60px;
  padding-bottom:30px;
  &.padd{
    padding-top:4.5rem;
    padding-bottom:4.5rem;
  }
`

const TextWrapper = styled.div`
  p {
     
    margin-bottom: 2rem;
    margin-top: 11rem;
    font-size: 1.8rem;
    color: #000000;
  }
`

const Hr = styled.hr`
  margin:0;
  border-style:none;
  border-bottom:#EFEFEF solid 1px;
`