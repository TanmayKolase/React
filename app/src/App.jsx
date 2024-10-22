import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormInputHandle from "./components/FormInputHandle";
import ToggleHandle from "./components/ToggleHandle";
import FetchingAPIData from "./components/FetchingAPIData";
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
                <NavLink to="/formInputHandle">Form Input Handle</NavLink>
              </li>
              <li>
                <NavLink to="/toggleHandle">Toggle Handle</NavLink>
              </li>
              <li>
                <NavLink to="/fetchingAPIData">
                  Fetching POSTS API Data and Showing
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/formInputHandle" element={<FormInputHandle />} />
            <Route path="/toggleHandle" element={<ToggleHandle />} />
            <Route path="/fetchingAPIData" element={<FetchingAPIData />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
