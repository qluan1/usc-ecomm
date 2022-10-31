import './App.css';
import Login from './pages/logIn';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import ForgetPassword from "../src/pages/forgetpassword";

function App() {
  
  return (
          <div className="App">
            <Router>
              <Routes>
              <Route exact path="/Login" element={<Login/>} />
              <Route exact path="/Login/forgetpassword" element={<ForgetPassword/>} />
              </Routes>
            </Router>
          </div>

  );
}

export default App;
