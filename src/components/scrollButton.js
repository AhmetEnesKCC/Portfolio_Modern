import React from "react"
import image from "../assets/images/Scroll_Indicator.png"
export default function Scroll_Buttom() {
  return (
    <div className="scroll_button" onClick={() => document.getElementsByClassName('titles')[0].scrollIntoView({behavior : "smooth"})}><button><img src={image} alt=""/></button></div>
  )
}