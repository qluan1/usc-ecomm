
import Register from './pages/Register';
import { Home  }from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateHome from './pages/UpdateHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signUp' element = {<Register />} />
          <Route path='/UpdateHome' element = {<UpdateHome />} />
          {/* <Route path='/login' element = {<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
