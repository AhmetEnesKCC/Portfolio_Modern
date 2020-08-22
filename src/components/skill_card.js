import React from "react"

export default function Skill_Card(props) {
  return <div className="skill_card">
    <img className="skills_images" src={props.img} alt=""/>
    <h4 className="skills_title">{props.title}</h4>

    <ul className="skills_text">
      {props.list.map(item => {
        return <li>{item}</li>
      })}
    </ul>
  </div>
}