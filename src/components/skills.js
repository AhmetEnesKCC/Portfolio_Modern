import React from "react"
import Skill_Card from "./skill_card"

import { useSelector } from "react-redux"
const web = require("../assets/images/Group 10.png")
const native = require("../assets/images/Group 9.png")
const design = require("../assets/images/Group 11.png")


export default function Skills() {
  const state = useSelector(state => state.queries)
  return (
    <div className='skills'>{typeof  Object.keys(state) !== 'undefined' && Object.keys(state).length > 0 ? Object.keys(state.page_components.skills.texts).map((key,pair) => {
      return <Skill_Card list={state.page_components.skills.texts[key].list} img={eval(key)} title={state.page_components.skills.texts[key].title} text={state.page_components.skills.texts[key].list}/>
    }) : ""}</div>
  )
}