const rootElement = document.querySelector(".root");
const user = [
  "Abiyu Nigussie",
  "Ethiopia",
  "Day 3 of learning react",
  "Male",
  "abiyunigussie7@gmail.com",
  "+251909541674",
];
const formattedUser = user.map((info) => {
  if (user.indexOf(info) === 0) return <h1 key={info}>{info}</h1>;
  else return <p key={info}>{info}</p>;
});

const main = (
  <main>
    <div className="main-wrapper">{formattedUser}</div>
  </main>
);
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>Designed by Abiyu Nigussie</p>
      <p>@copyright 2022</p>
    </div>
  </footer>
);

const app = (
  <div className="app">
    {main}
    {footer}
  </div>
);
ReactDOM.render(app, rootElement);
