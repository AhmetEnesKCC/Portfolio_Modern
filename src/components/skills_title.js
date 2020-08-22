import React from "react"
import { useSelector } from "react-redux"

export default function Skills_Title() {
  const state = useSelector(state => state.queries)
  return <h3 className={`titles skills_scroll`}>{state.page_components ? state.page_components.skills.title : ""}</h3>
}