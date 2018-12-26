import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import sectionStyles from './section.module.css'

const query = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      marginBottom: 0,
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={sectionStyles.section}>
        <header
          style={{
            marginBottom: `1.5rem`,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{ textShadow: `none`, backgroundImage: `none` }}
          >
            <h3 style={{ margin: 0 }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, margin: 0 }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">
              About {data.site.siteMetadata.title}
            </ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {props.children}
      </section>
    )}
  />
)
