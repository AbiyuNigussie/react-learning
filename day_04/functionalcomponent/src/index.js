import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const hexacolor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  return (
    <div className="wrapper">
      <div className="color" style={{ backgroundColor: hexacolor() }}>
        {hexacolor()}
      </div>
      <div className="color" style={{ backgroundColor: hexacolor() }}>
        {hexacolor()}
      </div>
      <div className="color" style={{ backgroundColor: hexacolor() }}>
        {hexacolor()}
      </div>
      <div className="color" style={{ backgroundColor: hexacolor() }}>
        {hexacolor()}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HexaColor />);
