import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormInputHandle from "./components/FormInputHandle";

function App() {
  return (
    <>
      <h1>Welcome to the React App</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/formInputHandle">Form Input Handle</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/formInputHandle" element={<FormInputHandle />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
