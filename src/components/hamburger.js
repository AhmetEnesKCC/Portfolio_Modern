import React from "react"

export default function Hamburger() {
  return (
    <div className="hamburger_menu">
      <button
        onClick={e =>
          console.log(
            e.target.parentNode.style.height === "0px"
              ? (e.target.parentNode.style.height = "160px")
              : (e.target.parentNode.style.height = "0px")
          )
        }
        className="hamburger_button"
      >
        <span className="spans"></span>
        <span className="spans"></span>
        <span className="spans"></span>
      </button>
    </div>
  )
}
