import React from "react"
import { graphql } from "gatsby"
import Section from "../components/section"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Section>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Section>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`