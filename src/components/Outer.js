import React from "react";

const style = {
  color: "red",
  backgroundColor: "yellow"
};
function Outer(props) {
  return <div style={style}>{props.name}</div>;
}

export default Outer;
