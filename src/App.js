import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Weather checker</header>
        <h3>Ensuring a perfect day-out</h3>
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}

export default App;
