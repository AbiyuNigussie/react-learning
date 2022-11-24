import reactImg from "../../images/react.png";
import verifiedIcon from "../../images/verified.png";
const profileStyles = {
  display: "flex",
  flexDirection: "column",
  margin: "0px 0px 20px 0px",
};
const profileNameStyles = {
  display: "flex",
  lineHeight: "25px",
  margin: "20px 0",
};
const profile = (
  <div style={profileStyles}>
    <img
      src={reactImg}
      height={"150px"}
      width={"150px"}
      alt={"reactImage"}
      style={{ borderRadius: "100%" }}
    />
    <div style={profileNameStyles}>
      <h4>
        <b>ABIYU NIGUSSIE</b>
      </h4>
      <img
        src={verifiedIcon}
        height={"25px"}
        width={"25px"}
        alt={"VerificationIcon"}
      />
    </div>
    <p style={{ fontSize: "13px" }}>Junior Developer, Ethiopia</p>
  </div>
);

export default profile;
