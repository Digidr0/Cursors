import "./App.css"
function Cursor(props) {
     
  return (
    <div className={`Cursor`} style={{cursor:props.cursor || props.userCursor}}>
      <span className="cursor-type">{props.text}</span>
      <div className="cursor-element">{props.innerElement}</div>
    </div>
  );
}
export default Cursor;