import profile from "./profile";
import skills from "./skills";
import joinedDate from "./joinedDate";
const userCardStyles = {
  height: "100%",
  backgroundColor: "#f0f1f7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const userCardWrapper = {
  width: "75%",
  backgroundColor: "#ffffff",
  padding: "10px 20px 30px 20px",
  borderRadius: "5px",
};

const userCard = (
  <div style={userCardStyles}>
    <div style={userCardWrapper}>
      {profile}
      {skills}
      {joinedDate}
    </div>
  </div>
);

export default userCard;
