import React from "react"
import { useSelector } from "react-redux"

export  default function Header_Text()  {
  const section = useSelector(state => state.queries)
  console.log(typeof section)
    return (
      <section>
          <h2>{section.page_components ? section.page_components.index.header.main : ""}</h2>
          <p>{section.page_components  ? section.page_components.index.header.sub : ""}</p>
      </section>
    )
}