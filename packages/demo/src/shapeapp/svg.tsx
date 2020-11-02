import React, { useEffect } from "react"

export const getContext = () => {
  const theCanvas: SVGElement | null = document.querySelector("#svg")
  return theCanvas
}

// export const appendToSVG = (node: any) => {
//   const ctx = getContext()
//   if (ctx) {
//     ctx.appendChild(node)
//   }
// }

const SVG: React.FC = () => {
  useEffect(() => {
    const context = getContext()
    if (context) {
      context.style.outline = "1px solid #aaaaaa"
      context.style.background = "#ffffff"
    }
  }, [])

  return (
    <svg id="svg" width="100%" height="70vh">
      Your browser does not support HTML5 Canvas.
    </svg>
  )
}

export default SVG
