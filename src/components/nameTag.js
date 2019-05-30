import React from "react";

const style = {
  border: "1px solid yellow",
  width: "500px",
  height: "300px",
  marginBottom: "10px"
};

const vipStyle = {
  color: "green"
};
const nonVipStyle = {
  color: "red"
};
const buttonStyle = {
  width: "150px",
  paddingTop: "10px",
  paddingBottom: "10px"
};

function Outer(props) {
  return (
    <div style={style}>
      <h3>Title</h3>
      <h3>{props.name}</h3>
      <button name={props.name} onClick={props.doWhatEver} style={buttonStyle}>
        Remove {props.name}
      </button>
    </div>
  );
}

export default Outer;
