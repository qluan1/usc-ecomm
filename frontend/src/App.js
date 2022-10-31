
import Register from './pages/Register';
import { Home  }from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateHome from './pages/UpdateHome';

import Login from './pages/logIn';
import ForgetPassword from "../src/pages/forgetpassword";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signUp' element = {<Register />} />
          <Route path='/UpdateHome' element = {<UpdateHome />} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Login/forgetpassword" element={<ForgetPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
