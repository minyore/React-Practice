import logo from "./logo.svg";
import "./App.css";
import Gnb from "./components/gnb/Gnb";
import Container from "./components/Container";
import ColorList from "./components/ColorList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Gnb />
      </header>
      <Container />
    </div>
  );
}

export default App;
