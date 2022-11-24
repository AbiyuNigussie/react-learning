const skillsWrapper = {
  display: "flex",
  flexDirection: "column",
};

const skillsStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10px 0 0 5px",
};

const skillStyles = {
  textAlign: "center",
  minWidth: "60px",
  backgroundColor: "#2acfcf",
  fontWeight: "500",
  color: "white",
  margin: "5px 5px",
  borderRadius: "5px",
  padding: "2px 3px",
};

const skills = (
  <div style={skillsWrapper}>
    <p style={{ fontWeight: "600" }}>SKILLS</p>
    <div style={skillsStyles}>
      <p style={skillStyles}>HTML</p>
      <p style={skillStyles}>CSS</p>
      <p style={skillStyles}>Sass</p>
      <p style={skillStyles}>JS</p>
      <p style={skillStyles}>React</p>
      <p style={skillStyles}>Redux</p>
      <p style={skillStyles}>Node</p>
      <p style={skillStyles}>Python</p>
      <p style={skillStyles}>MongoDB</p>
      <p style={skillStyles}>Flask</p>
      <p style={skillStyles}>Django</p>
      <p style={skillStyles}>Numpy</p>
      <p style={skillStyles}>Pandas</p>
      <p style={skillStyles}>Data Analysis</p>
      <p style={skillStyles}>MYSQL</p>
      <p style={skillStyles}>GraphSQL</p>
      <p style={skillStyles}>Docker</p>
      <p style={skillStyles}>Heroku</p>
      <p style={skillStyles}>Git</p>
    </div>
  </div>
);

export default skills;
