const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetBlog {
      blogs: allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogs.nodes.forEach(product => {
    createPage({
      path: `/blog/${product.slug}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}

