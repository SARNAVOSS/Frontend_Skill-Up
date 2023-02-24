import React, { useContext } from "react"
import { Route,Routes } from "react-router-dom"
import CompanyLogin from "./components/company/CompanyLogin"
import RegisterCompany from "./components/company/RegisterCompany"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import RegisterUser from "./components/user/RegisterUser"
import UserLogin from "./components/user/UserLogin"
import { Basecontext } from "./Context/Basecontext"
import { UserDashboard, UserProfile } from "./pages"
import Home from "./pages/Home"
import Landing from "./pages/Landing"



function App() {

  const {state,dispatch} = useContext(Basecontext)

  return (
    <div className="w-screen h-screen">
      {/* <UserCertificate /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/companylogin" element={<CompanyLogin />} />
        <Route path="/login/userlogin" element={<UserLogin />} />
        <Route path="/signup/companysignup" element={<RegisterCompany />} />
        <Route path="/signup/usersignup" element={<RegisterUser />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default App
