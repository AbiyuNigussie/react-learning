import clockIcon from "../../images/clock.png";

const joinedDateStyles = {
  margin: "30px 0 0 0",
  display: "flex",
  lineHeight: "10px",
  fontWeight: "400",
};
const joinedDate = (
  <div style={joinedDateStyles}>
    <img src={clockIcon} alt="clockIcon" width={"10px"} height={"10px"} />
    <p style={{ margin: "0 0 0 5px", fontSize: "13px" }}>
      Joined on Nov 21, 2022
    </p>
  </div>
);

export default joinedDate;
