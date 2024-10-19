import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Parent from "./components/propsPractice/Parent";

function App() {
  return (
    <>
      <h1>Welcome to the React App</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/greeting">Greeting</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
              <li>
                <NavLink to="/propsPractice">Props Practice</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/greeting" element={<Greeting name="Tanmay" />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/propsPractice" element={<Parent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
