import React          from "react"
import NewsThumb      from "../components/NewsThumb"
import styled         from "styled-components";
import { textStyles } from '../styles/vars'

const NewsPage = function( {data} ) {
	return(
		<div>
			<div className="wrapper padd">
				<H1>News</H1>
			</div>
      <Hr />
			{data.posts.edges.map((post, index) => (
				<NewsThumb
					key={index}
					src={post.node.frontmatter.image}
					title={post.node.frontmatter.title}
					text={post.node.excerpt}
					to={post.node.fields.slug}
				/>
			))}

		</div>
	)
}



export default NewsPage

export const NewsQuery = graphql`
  query NewsPageQuery {
    posts: allMarkdownRemark(
      filter: {
        fields: {
          slug: {
            regex: "/^/posts//m"
          }
        }
      },
      sort: { fields: [frontmatter___date], order: DESC }
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
            image
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
  padding-bottom:30px;
  &.padd{
    padding-top:4.5rem;
    padding-bottom:4.5rem;
  }
`

const Hr = styled.hr`
  margin:0;
  border-style:none;
  border-bottom:#EFEFEF solid 1px;
`