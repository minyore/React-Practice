import "./App.scss";
import Gnb from "./components/gnb/Gnb";
import Container from "./components/Container";

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
