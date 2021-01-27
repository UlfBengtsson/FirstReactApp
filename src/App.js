import MyFirstComponet from "./componets/MyFirstComponet"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section>
        <MyFirstComponet />
        <MyFirstComponet />
      </section>

    </div>
  );
}

export default App;
