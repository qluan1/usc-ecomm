
import Signup from './pages/Signup';
import { Home  }from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateHome from './pages/UpdateHome';
import SellerHome from './pages/sellerhomepage';
import Login from './pages/Login';
import ForgetPassword from "../src/pages/forgetpassword";
import Profile from './pages/Profile';
import AuthProvider from './Context/AuthProvider';
import PersistProvider from './Context/PersistProvider';
import AddProduct from './pages/AddProduct';

function App() {
  
  return (
    <div className="App">
      <PersistProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path="/Login" element={<Login/>} />
                <Route path='/signup' element = {<Signup />} />
                <Route path="/profile" element={<Profile />}/>
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path="/sellerHome" element={<SellerHome/>}/>
                <Route path='/UpdateHome' element = {<UpdateHome />} />
                <Route path="/Login/forgetpassword" element={<ForgetPassword/>} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </PersistProvider>
    </div>
  );
}

export default App;
