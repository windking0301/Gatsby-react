const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })	
		createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }

}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
				}
				allProjectsYaml {
					edges {
						node {
							name
							url
						}
					}
				}
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.fields.slug
          }
        })
			})
			result.data.allProjectsYaml.edges.map(({ node }) => {
        createPage({
          path: `/collections/${node.url}`,
					component: path.resolve(`./src/templates/project.js`),
					context: {
						url: node.url
					}
        })
			})
			resolve()			
    })
	})
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-youtube-modal/,
      loader: "null-loader",
    });
  }
};