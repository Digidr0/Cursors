import { useEffect, useState } from "react";
function Canvas(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = document.querySelector(`.Canvas-${props.type}`);
    const dot = document.querySelector(`.canvas-dot-${props.type}`);

    const setFromEvent = (e) =>
      setPosition({
        x:
          (canvas.getBoundingClientRect().x - e.clientX + dot.offsetWidth / 2) *
          -1,
        y:
          (canvas.getBoundingClientRect().y -
            e.clientY +
            dot.offsetHeight / 2) *
          -1,
      });
    canvas.addEventListener("mouseenter", () => {
      canvas.addEventListener("mousemove", (e) => setFromEvent(e));
    });
    canvas.addEventListener("mouseleave", () => {
      canvas.removeEventListener("mousemove", (e) => setFromEvent(e));
    });
  }, []);
  return (
    <div
      className={`Canvas-${props.type}`}
      style={{
        position: "relative",
        width: "10em",
        height: "4em",
      }}
    >
      <div
        className={`canvas-dot-${props.type}`}
        style={{
          content: "",
          height: "1.5em",
          width: "1.5em",
          backgroundColor: "white",
          borderRadius: ".1em",
          position: "absolute",
          left: position.x,
          top: position.y,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}
export default Canvas;
