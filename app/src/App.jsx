import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ReactHookForm from "./components/ReactHookForm";

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
                <NavLink to="/reactHookForm">React Hook Form</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/reactHookForm" element={<ReactHookForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
