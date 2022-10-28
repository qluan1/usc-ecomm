
import Register from './pages/Register';
import { Home  }from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateHome from './pages/UpdateHome';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signUp' element = {<Register />} />
          <Route path='/UpdateHome' element = {<UpdateHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
