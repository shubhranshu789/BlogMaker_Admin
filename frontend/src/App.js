import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Home from './Components/Home/Blog'
import AddProject from './Components/AddProject/AddProject'

import ViewEconomy from './Components/AddProject/EconomyBlog'
import AddEconomy from './Components/AddProject/AddEconomyBlog'

import ViewFinancia from './Components/AddProject/FinacialBlogs/FinancialBLogs'
import AddFinancia from './Components/AddProject/FinacialBlogs/Add'

import ViewTecnical from './Components/AddProject/TechnicalBlogs/TechnicalBlogs'
import AddTecnical from './Components/AddProject/TechnicalBlogs/Add'

import ViewOthers from './Components/AddProject/Others/OthersBlog'
import AddOthers from './Components/AddProject/Others/Add'

import SignUp from './Components/AuthPage/SignUp'
import SignIn from './Components/AuthPage/SignIn'


// import About from './Components/About/About'







function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/addprojects" element={<AddProject/>}></Route>
            
            <Route path="/economyblog" element={<ViewEconomy/>}></Route>
            <Route path="/addeconomyblog" element={<AddEconomy/>}></Route>

            <Route path="/financilabolgs" element={<ViewFinancia/>}></Route>
            <Route path="/addfinancil" element={<AddFinancia/>}></Route>

            <Route path="/technicalblogs" element={<ViewTecnical/>}></Route>
            <Route path="/addtechnical" element={<AddTecnical/>}></Route>

            <Route path="/othersblogs" element={<ViewOthers/>}></Route>
            <Route path="/addothers" element={<AddOthers/>}></Route>

            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>

            {/* <Route path="/about" element={<About/>}></Route> */}
          </Routes>
          <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
