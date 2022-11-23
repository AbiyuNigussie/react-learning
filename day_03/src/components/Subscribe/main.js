const mainStyles = {
  paddingBottom: "40px",
};

const fieldsStyles = {
  display: "flex",
  justifyContent: "center",
};

const inputFieldStyles = {
  margin: "0 5px 0 5px",
  height: "40px",
  width: "225px",
  borderRadius: "5px",
  border: "none",
  paddingLeft: "10px",
};

const subscribeButtonWrapper = {
  margin: "30px 0 0 0",
};
const subscribeButton = {
  textAlign: "center",
  backgroundColor: "#f37474",
  height: "40px",
  width: "300px",
  border: "none",
  borderRadius: "5px",
  color: "white",
};
const main = (
  <main style={mainStyles}>
    <div style={fieldsStyles}>
      <input
        type={"text"}
        placeholder={"First name"}
        style={inputFieldStyles}
      />
      <input type={"text"} placeholder={"Last name"} style={inputFieldStyles} />
      <input type={"email"} placeholder={"email"} style={inputFieldStyles} />
    </div>
    <div style={subscribeButtonWrapper}>
      <input style={subscribeButton} type={"button"} value={"Subscribe"} />
    </div>
  </main>
);

export default main;
