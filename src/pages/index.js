import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import { useDispatch } from "react-redux"
import { queryAction } from "../Redux/graphql"
import Content from "../components/content"
import Container from "../components/container"
import Scroll_Buttom from "../components/scrollButton"
import Divider from "../components/divider"
import Skills from "../components/skills"
import Skills_Container from "../components/skills_container"
import About_Container from "../components/about_container"
import Projects_Container from "../components/projects_container"
import Hamburger from "../components/hamburger"
function IndexPage({ data }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(queryAction(data.site.siteMetadata))
  })
  return (
    <div>
      <SEO title={"Portfolio"} />

      <Container />
      <Divider />
      <Scroll_Buttom />
      <Skills_Container />
      <About_Container />
      <Projects_Container />
    </div>
  )
}

export const query = graphql`
  query mainQuery {
    ...subQuery
  }
  fragment subQuery on Query {
    site {
      siteMetadata {
        page_components {
          index {
            header {
              main
              sub
            }
          }
          skills {
            title
            texts {
              web {
                title
                list
              }
              native {
                title
                list
              }
              design {
                title
                list
              }
            }
          }
          about {
            title
            text
          }
          projects {
            title
            text {
              buttons {
                repo
                Page
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
