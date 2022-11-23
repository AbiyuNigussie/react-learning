import header from "./header";
import main from "./main";

const subscribeStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
const subWrapper = {
  backgroundColor: "#c2e6f4",
  width: "75%",
  borderRadius: "10px",
};

const subscribe = (
  <div style={subscribeStyles}>
    <div style={subWrapper}>
      {header}
      {main}
    </div>
  </div>
);

export default subscribe;
