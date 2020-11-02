import React, { useEffect, useState } from "react"
import SVG, { Circle, Rectangle, IShape, Line, Ellipse } from "."
import styled from "styled-components"
import Icon from "@mdi/react"
import {
  mdiCircleOutline,
  mdiRectangleOutline,
  mdiEllipseOutline,
} from "@mdi/js"

const AttributPanel = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  grid-gap: 15px;
  flex-wrap: wrap;
  // width: 60%;
  top: 10px;
  background: #444;
  padding: 10px;
  z-index: 99999;

  * {
    color: #222;
  }

  div {
    label {
      font-size: initial;
      color: #fff;
    }
    * {
      display: block;
    }
  }
  select,
  input {
    border-color: brown;
    padding: 5px;
    width: 70px;
  }

  button {
    border-color: brown;
    background: gold;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
  }
`

const LineIcon = styled.div`
  width: 20px;
  height: 2px;
  background: #555;
  transform: rotate(-45deg);
`

const ClearPanel = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
  background: #444;
  padding: 10px;

  button {
    border-color: brown;
    background: gold;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
  }
`

const ShapePanel = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #444;
  padding: 10px;
  grid-gap: 5px;

  button {
    border-color: brown;
    background: gold;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
  }
`

const RectAttr: React.FC<any> = ({ setAttr, attr, rect }) => {
  return (
    <>
      <div>
        <label htmlFor="fill">Fill</label>
        <select
          name="fill"
          value={attr?.fill}
          onChange={e => {
            setAttr({ ...attr, fill: e.target.value })
          }}
          id="fill"
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <div>
        <label htmlFor="length">Length</label>
        <input
          type="number"
          value={attr?.length}
          onChange={e => {
            setAttr({ ...attr, length: e.target.value })
          }}
          name="length"
          id="length"
        />
      </div>
      <div>
        <label htmlFor="stroke-width">Stroke width</label>
        <input
          type="number"
          name="stroke-width"
          id="stroke-width"
          value={attr["stroke-width"]}
          onChange={e => {
            setAttr({ ...attr, "stroke-width": e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="stroke">Stroke Color</label>
        <select
          name="stroke"
          id="stroke"
          value={attr?.stroke}
          onChange={e => {
            setAttr({ ...attr, stroke: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <button
        onClick={() => {
          rect?.draw(attr)
        }}
      >
        Draw
      </button>
    </>
  )
}

const LineAttr: React.FC<any> = ({ setAttr, attr, line }) => {
  return (
    <>
      <div>
        <label htmlFor="x1">x1</label>
        <input
          type="number"
          value={attr?.x1}
          onChange={e => {
            setAttr({ ...attr, x1: e.target.value })
          }}
          name="x1"
          id="x1"
        />
      </div>
      <div>
        <label htmlFor="xs">x2</label>
        <input
          type="text"
          value={attr?.x2}
          onChange={e => {
            setAttr({ ...attr, x2: e.target.value })
          }}
          name="x2"
          id="x2"
        />
      </div>
      <div>
        <label htmlFor="y1">y1</label>
        <input
          type="number"
          value={attr?.y1}
          onChange={e => {
            setAttr({ ...attr, y1: e.target.value })
          }}
          name="y1"
          id="y1"
        />
      </div>
      <div>
        <label htmlFor="y2">y2</label>
        <input
          type="number"
          value={attr?.y2}
          onChange={e => {
            setAttr({ ...attr, y2: e.target.value })
          }}
          name="y2"
          id="y2"
        />
      </div>
      <div>
        <label htmlFor="stroke-width">Stroke width</label>
        <input
          type="number"
          name="stroke-width"
          id="stroke-width"
          value={attr["stroke-width"]}
          onChange={e => {
            setAttr({ ...attr, "stroke-width": e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="stroke">Stroke Color</label>
        <select
          name="stroke"
          id="stroke"
          value={attr?.stroke}
          onChange={e => {
            setAttr({ ...attr, stroke: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <button
        onClick={() => {
          line?.draw(attr)
        }}
      >
        Draw
      </button>
    </>
  )
}

const CircleAttr: React.FC<any> = ({ setAttr, attr, circle }) => {
  return (
    <>
      <div>
        <label htmlFor="fill">Fill</label>
        <select
          name="fill"
          id="fill"
          value={attr?.fill}
          onChange={e => {
            setAttr({ ...attr, fill: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <div>
        <label htmlFor="r">Radius</label>
        <input
          type="number"
          name="r"
          id="r"
          value={attr?.r}
          onChange={e => {
            setAttr({ ...attr, r: e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="stroke-width">Stroke width</label>
        <input
          type="number"
          name="stroke-width"
          id="stroke-width"
          value={attr["stroke-width"]}
          onChange={e => {
            setAttr({ ...attr, "stroke-width": e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="stroke">Stroke Color</label>
        <select
          name="stroke"
          id="stroke"
          value={attr?.stroke}
          onChange={e => {
            setAttr({ ...attr, stroke: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <button
        onClick={() => {
          circle?.draw(attr)
        }}
      >
        Draw
      </button>
    </>
  )
}

const EllipseAttr: React.FC<any> = ({ setAttr, attr, ellipse }) => {
  return (
    <>
      <div>
        <label htmlFor="fill">Fill</label>
        <select
          name="fill"
          id="fill"
          value={attr?.fill}
          onChange={e => {
            setAttr({ ...attr, fill: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <div>
        <label htmlFor="rx">X Radius</label>
        <input
          type="number"
          name="rx"
          id="rx"
          value={attr?.rx}
          onChange={e => {
            setAttr({ ...attr, rx: e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="ry">Y Radius</label>
        <input
          type="number"
          value={attr?.ry}
          onChange={e => {
            setAttr({ ...attr, ry: e.target.value })
          }}
          name="ry"
          id="ry"
        />
      </div>
      <div>
        <label htmlFor="stroke-width">Stroke width</label>
        <input
          type="number"
          name="stroke-width"
          id="stroke-width"
          value={attr["stroke-width"]}
          onChange={e => {
            setAttr({ ...attr, "stroke-width": e.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor="stroke">Stroke Color</label>
        <select
          name="stroke"
          id="stroke"
          value={attr?.stroke}
          onChange={e => {
            setAttr({ ...attr, stroke: e.target.value })
          }}
        >
          <option value="none">...</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </div>
      <button
        onClick={() => {
          ellipse?.draw(attr)
        }}
      >
        Draw
      </button>
    </>
  )
}
const RenderPanel: React.FC<any> = ({
  selectedShape,
  setAttr,
  attr,
  rect,
  ellipse,
  circle,
  line,
}) => {
  switch (selectedShape) {
    case "rect":
      return <RectAttr setAttr={setAttr} attr={attr} rect={rect} />
    case "ellipse":
      return <EllipseAttr setAttr={setAttr} attr={attr} ellipse={ellipse} />
    case "circle":
      return <CircleAttr setAttr={setAttr} attr={attr} circle={circle} />
    case "line":
      return <LineAttr setAttr={setAttr} attr={attr} line={line} />
    default:
      return <></>
  }
}

const ShapeApp: React.FC = () => {
  const [rect, setRect] = useState<IShape>()
  const [circle, setCircle] = useState<IShape>()
  const [ellipse, setEllipse] = useState<IShape>()
  const [line, setLine] = useState<IShape>()
  const [selectedShape, setSelectedShape] = useState<
    "rect" | "circle" | "ellipse" | "line"
  >()
  const [attr, setAttr] = useState<any>()

  const defaultRectAttr = {
    fill: "none",
    length: "1",
    stroke: "red",
    "stroke-width": "1",
  }

  const defaultLineAttr = {
    "stroke-width": "1",
    stroke: "#000000",
    x1: "0",
    x2: "100",
    y1: "0",
    y2: "100",
  }

  const defaultCircleAttr = {
    fill: "none",
    r: "30",
    "stroke-width": "1",
    stroke: "red",
  }

  const defaultEllipseAttr = {
    fill: "none",
    rx: "50",
    ry: "20",
    "stroke-width": "1",
    stroke: "red",
  }

  useEffect(() => {
    setRect(new Rectangle({}))
    setCircle(new Circle({}))
    setEllipse(new Ellipse({}))
    setLine(new Line({}))
  }, [])

  return (
    <>
      <AttributPanel>
        <RenderPanel
          selectedShape={selectedShape}
          rect={rect}
          line={line}
          circle={circle}
          ellipse={ellipse}
          attr={attr}
          setAttr={setAttr}
        />
      </AttributPanel>
      <SVG />

      <ShapePanel>
        <button
          title="circle"
          style={{ color: "#555" }}
          onClick={() => {
            setSelectedShape("circle")
            setAttr(defaultCircleAttr)
          }}
        >
          <Icon path={mdiCircleOutline} size={1} color="#444" />
        </button>
        <button
          title="rectangle"
          style={{ color: "#555" }}
          onClick={() => {
            setSelectedShape("rect")
            setAttr(defaultRectAttr)
          }}
        >
          <Icon path={mdiRectangleOutline} size={1} color="#444" />
        </button>
        <button
          title="ellipse"
          style={{ color: "#555" }}
          onClick={() => {
            setSelectedShape("ellipse")
            setAttr(defaultEllipseAttr)
          }}
        >
          <Icon path={mdiEllipseOutline} size={1} color="#444" />
        </button>
        <button
          title="line"
          style={{ color: "#555" }}
          onClick={() => {
            setSelectedShape("line")
            setAttr(defaultLineAttr)
          }}
        >
          <LineIcon />
        </button>
      </ShapePanel>
      <ClearPanel>
        <button
          style={{ color: "#222index" }}
          onClick={() => {
            rect?.clearSaved()
            circle?.clearSaved()
            line?.clearSaved()
            ellipse?.clearSaved()
          }}
        >
          Clear storage
        </button>
      </ClearPanel>
    </>
  )
}
export default ShapeApp
