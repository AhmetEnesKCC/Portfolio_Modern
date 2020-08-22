import React, { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Header_Content() {
  const pages = useSelector(state => state.queries)

  console.log(pages)
  return <div className="header_content">{typeof Object.keys(pages) !== "undefined" && Object.keys(pages).length > 0 ? Object.keys(pages.page_components).map(function(key,pair) {
    return (
      <div onClick={() => document.documentElement.getElementsByClassName( pages.page_components[key].title.toLowerCase() +'_scroll')[0].scrollIntoView({behavior : "smooth"})}>{pages.page_components[key].title}
        </div>
    )
  }) : ""}</div>
}

