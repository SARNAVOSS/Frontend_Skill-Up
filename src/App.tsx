import React, { useContext } from "react"
import { Route,Routes } from "react-router-dom"
import { SkillTestBlock } from "./components"
import CertificateItem from "./components/company/CertificateItem"
import CompanyLogin from "./components/company/CompanyLogin"
import RegisterCompany from "./components/company/RegisterCompany"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import RegisterUser from "./components/user/RegisterUser"
import UserLogin from "./components/user/UserLogin"
import { Basecontext } from "./Context/Basecontext"
import { Skillpage, UserDashboard, UserProfile } from "./pages"
import CompanyDashboard from "./pages/dashboard/company/CompanyDashboard"
import CompanyProfile from "./pages/dashboard/company/CompanyProfile"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import ErrorComponent from "./utils/ErrorComponent"



function App() {

  const {state,dispatch} = useContext(Basecontext)

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
        <Route path="/user/dashboard" element={localStorage.getItem('client') === 'user'? <UserDashboard /> : <ErrorComponent />} />
        <Route path="/user/profile" element={localStorage.getItem('client') === 'user'? <UserProfile /> : <ErrorComponent />} />
        <Route path="/user/skilltest" element={<Skillpage />} />
        <Route path="/company/dashboard" element={localStorage.getItem('client') === 'company' ? <CompanyDashboard /> : <ErrorComponent />} />
        <Route path="/company/profile" element={localStorage.getItem('client') ? <CompanyProfile /> : <ErrorComponent />} />
      </Routes>
    </div>
  )
}

export default App
