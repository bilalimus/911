import logo from "./logo.svg";
import "./App.css";

const myApps = [
  {
    name: "Activator",
    link: "https://www.dropbox.com/s/iq6of62iqhfi2m5/KMSAuto_Net_Office_111.zip?dl=0",
  },
  {
    name: "VNC",
    link: "https://www.dropbox.com/scl/fi/1rf7gm7w0zyo44tklvfge/UltraVNC64.zip?rlkey=mf46tcgchj2ly5e3g00ghw3u6&dl=0",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>List of links</p>
        {myApps.map((app) => {
          return (
            <a
              className="App-link"
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {app.name}
            </a>
          );
        })}
      </header>
    </div>
  );
}

export default App;
