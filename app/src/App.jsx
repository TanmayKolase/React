import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <h1>Welcome to the React App</h1>
      {/* <Greeting name="Tanmay" age={20} /> */}
      <Counter />
    </>
  );
}

export default App;
