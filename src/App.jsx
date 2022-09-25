import { useState } from "react";
import Cursor from "./Cursor";
import Canvas from "./Canvas";
import svg from "/logo.svg";
import "./App.css";

function App() {
  const [cursors, setCursors] = useState([
    {
      type: "auto",
      innerElement: (
        <div className="auto">
          <span>text</span>
          <button>btn</button>
        </div>
      ),
    },
    { type: "default" },
    { type: "text", innerElement: <span>select me!</span> },
    { type: "pointer", innerElement: <button>Click me!</button> },
    { type: "help", innerElement: <a className="help">help page</a> },
    { type: "wait" },
    { type: "progress" },
    {
      type: "crosshair",
      innerElement: (
        <div className="column">
          <span>Select me!</span>
          <span>and me!</span>
        </div>
      ),
    },
    { type: "move", innerElement: <Canvas type="move" /> },
    {
      type: "e-resize",
      innerElement: <input type="range" className="e"></input>,
    },
    {
      type: "ew-resize",
      innerElement: <input type="range" className="ew"></input>,
    },
    {
      type: "s-resize",
      innerElement: <input type="range" className="s resize"></input>,
    },
    {
      type: "ns-resize",
      innerElement: <input type="range" className="ns resize"></input>,
    },
    {
      type: "ne-resize",
      innerElement: <input type="range" className="ne resize"></input>,
    },
    {
      type: "nw-resize",
      innerElement: <input type="range" className="nw resize"></input>,
    },
    {
      type: "se-resize",
      innerElement: <input type="range" className="se resize"></input>,
    },
    {
      type: "sw-resize",
      innerElement: <input type="range" className="sw resize"></input>,
    },
    {
      type: "nesw-resize",
      innerElement: <input type="range" className="nesw resize"></input>,
    },
    {
      type: "nwse-resize",
      innerElement: <input type="range" className="nwse resize"></input>,
    },
    { type: "none" },
    {
      type: "vertical-text",
      innerElement: (
        <div className="vertical-text">
          vert<br></br>text
        </div>
      ),
    },
    {
      type: "context-menu",
      innerElement: (
        <select className="context-menu">
          <option>menu item 1</option>
          <option>menu item 2</option>
        </select>
      ),
    },
    {
      type: "cell",
      innerElement: (
        <table className="cell">
          <tbody>
            <tr>
              <td>The table</td>
              <td>with two</td>
            </tr>
            <tr>
              <td>body</td>
              <td>columns</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    { type: "alias", innerElement: <></> },
    {
      type: "copy",
      innerElement: (
        <a className="copy" onClick={(e) => (e.target.innerHTML = "Copied!")}>
          Copy me!
        </a>
      ),
    },
    {
      type: "no-drop",
      innerElement: <img className="no-drop" src={svg}></img>,
    },
    {
      type: "not-allowed",
      innerElement: <button className="not-allowed">Dont click me!</button>,
    },
    {
      type: "col-resize",
      innerElement: <input type="range" className="col-resize"></input>,
    },
    {
      type: "row-resize",
      innerElement: <input type="range" className="row-resize"></input>,
    },
    { type: "all-scroll", innerElement: <div></div> },
    {
      type: "zoom-in",
      innerElement: (
        <div
          className="zoom in"
          onClick={(e) => e.target.classList.toggle("scale")}
        ></div>
      ),
    },
    {
      type: "zoom-out",
      innerElement: (
        <div
          className="zoom in scale"
          onClick={(e) => e.target.classList.toggle("scale")}
        ></div>
      ),
    },
    { type: "grab", innerElement: <div></div> },
    { type: "grabbing", innerElement: <div></div> },
  ]);
  const cursorElements = cursors.map((cursor, i) => (
    <Cursor
      cursor={cursor.type}
      text={`${cursor.type.charAt(0).toUpperCase()}${cursor.type.slice(1)}`}
      innerElement={cursor.innerElement}
      key={cursor.type}
    />
  ));

  return (
    <div className="App">
      {cursorElements}
      <Cursor userCursor={`url(/logo.svg), auto`} text={"URL cursor"} />
      <footer className="Cursor" style={{ fontWeight: "600" }}>
        Powered by <a href="https://github.com/digidr0">Digidro</a> in 2022
      </footer>
    </div>
  );
}

export default App;
