import React from "react"
import { useSelector } from "react-redux"

export default function About_Text() {
  const state = useSelector(state => state.queries)
  return (
    <div className="about_text">
      <div className="about_text_pop">
        {" "}
        {state.page_components ? state.page_components.about.text : ""}
        <div className="balloon_effect"></div>
        <div className="balloon_effect-md"></div>
      </div>
    </div>
  )
}
