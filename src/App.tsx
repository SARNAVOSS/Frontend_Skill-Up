import React from "react"
import { Route,Routes } from "react-router-dom"
import CompanyLogin from "./components/company/CompanyLogin"
import RegisterCompany from "./components/company/RegisterCompany"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import RegisterUser from "./components/user/RegisterUser"
import UserLogin from "./components/user/UserLogin"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Landing from "./pages/Landing"



function App() {

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/companylogin" element={<CompanyLogin />} />
        <Route path="/login/userlogin" element={<UserLogin />} />
        <Route path="/signup/companysignup" element={<RegisterCompany />} />
        <Route path="/signup/usersignup" element={<RegisterUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
