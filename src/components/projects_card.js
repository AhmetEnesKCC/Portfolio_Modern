import React from "react"
import { useSelector } from "react-redux"

export default function Projects_Card(props) {
  const state = useSelector(state => state.queries)
  return (
    <div className="projects_card">
      <h3 className="projects_title">
        {props.title.replace(/-/g, " ").replace(/\./g, "").replace(/_/, " ")}
      </h3>
      <p className="projects_text">{props.text} App</p>
      <div className="button_container">
        <button type="button" onClick={() => window.open(props.repo_link)}>
          <div>
            {state.page_components
              ? state.page_components.projects.text.buttons.repo
              : ""}
          </div>
        </button>
        <button type="button" onClick={() => window.open(props.page_link)}>
          <div>
            {state.page_components
              ? state.page_components.projects.text.buttons.Page
              : ""}
          </div>
        </button>
      </div>
    </div>
  )
}
