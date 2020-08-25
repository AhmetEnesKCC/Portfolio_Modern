import React from "react"
import { useSelector } from "react-redux"

export default function Projects_Title() {
  const state = useSelector(state => state.queries)
  return (
    <h3 className="titles projects_scroll">
      {state.page_components ? state.page_components.projects.title : ""}
    </h3>
  )
}
