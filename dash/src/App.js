
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Component/Profile'
import Table from './Component/Table'
import Notifation from './Component/Notifaction'
import DashBord from './Component/DashBoard';
import SignIn from './Component/Signin'
import SignUp from './Component/Signup'
function App() {
  return (
    <div className="App">

     <BrowserRouter>
      <Routes>
     
        
         <Route  path='/' exact  element={<DashBord/>}/>
          <Route path="profile" element={<Profile />} />
          <Route path="table" element={<Table/>} />
          <Route path="notifation" element={<Notifation/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
