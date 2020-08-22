import React from "react"
import Header from "./header"
import Content from "./content"
import Scroll_Buttom from "./scrollButton"
import Skills from "./skills"
import Hamburger from "./hamburger"

export default function Container() {
  return (
    <div className="container">
      <Header />

      <Content />
    </div>
  )
}
