import React from "react"
import { useSelector } from "react-redux"

export default function About_Title() {
  const state = useSelector(state => state.queries)
  return (
    <h3 className="titles about_scroll">
      {state.page_components ? state.page_components.about.title : ""}
    </h3>
  )
}
