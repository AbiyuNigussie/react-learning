import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";

const imgStyles = {
  margin: "0 20px",
};
const main = (
  <main className="l2-main">
    <img style={imgStyles} src={html} width="200" height="200" />
    <img style={imgStyles} src={css} width="200" height="200" />
    <img style={imgStyles} src={js} width="200" height="200" />
    <img style={imgStyles} src={react} width="200" height="200" />
  </main>
);

export default main;
