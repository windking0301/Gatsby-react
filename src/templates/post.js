import React from "react"
import styled from "styled-components"
import { textStyles } from "../styles/vars"

export default ({ data }) => (
  <PostContainer className='wrapper sml padd'>
    <h2 >{data.markdownRemark.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </PostContainer>
)

const PostContainer = styled.div`
h1 {
	${textStyles.h1}
	margin-bottom: 4rem;
}
h2 {
	${textStyles.h2}
	margin-bottom: 2rem;
}
h3 {
	${textStyles.h3}
	margin-bottom: 2rem;
}
h4 {
	${textStyles.h4}
	margin-bottom: 2rem;
}
p {
	${textStyles.p}
	margin-bottom: 2rem;
	font-size:1.6rem;
}
`
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`