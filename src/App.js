import logo from "./logo.svg";
import "./App.css";
import { myApps } from "./Links";

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
