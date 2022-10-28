
import Register from './pages/Register';
import { Home  }from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signUp' element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
