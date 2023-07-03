import { Route, Routes, } from "react-router-dom"
// import HomePage from './components/Booking'
import AdminLayout from './pages/adminLayout'
import Dashboard from './components/dashboard'
import Backup from './components/backup'
import Brands from './components/brands'
import CustPages from './components/custompages'
import FAQ from './components/faq'
import QuickReplies from './components/quickreplies'
import RepOrder from './components/repairorder'
import CustPurch from './components/PurchaseCustomer'
// import RepDefects from './components/repdefects'
import RepDefects from './components/repDefectsFurqan'
import RepDevices from './components/repdevices'
import Report from './components/report'
import RepPriorities from './components/reppriorities'
import RepStatus from './components/repstatus'
import Settings from './components/settings'
import Translations from './components/translations'
import Users from './components/users'
// import routes from "./routes"
import UserRole from './components/userrole'
import Navber from './components/navber'
// import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePageBook';
// import Priority from "./components/Priority"
import TrackPage from './components/Track';
import Login from './components/Login';
import Booking from './components/Booking';
import About from "./components/about"
import './App.css'


let navbarCheck = () => {

  if (window.location.pathname == "/") {
    return <Navber />
  } else if (window.location.pathname == "/book-repair") {
    return <Navber />
  }
  else if (window.location.pathname == "/track") {
    return <Navber />
  }
  else if (window.location.pathname == "/auth/login") {
    // return <Navber />
  }
  else if (window.location.pathname == "/about") {
    return <Navber />
  }
  // else if(window.location.pathname == "/"){
  //   return <Navber />
  // }
  // else {
  //   return <Navbar />
  // }

}

function App() {

  return (

    <>
      {navbarCheck()}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-repair" element={<Booking />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/priority" element={ <Priority/>} /> */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="RepairOrders" element={<RepOrder />} />
          <Route path="CustomerPurchase" element={<CustPurch />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="RepairableDevices" element={<RepDevices />} />
          {/* <Route path="RepairableDevices" element={<RepairDevices />} /> */}
          <Route path="RepairableDefects" element={<RepDefects />} />
          {/* <Route path="QuickReplies" element={<QuickReplies />} /> */}
          <Route path="RepairStatus" element={<RepStatus />} />
          <Route path="RepairPriorities" element={<RepPriorities />} />
          {/* <Route path="CustomPages" element={<CustPages />} /> */}
          {/* <Route path="FAQ" element={<FAQ />} /> */}
          {/* <Route path="Report" element={<Report />} /> */}
          <Route path="Users" element={<Users />} />
          <Route path="UserRoles" element={<UserRole />} />
          <Route path="Settings" element={<Settings />} />
          {/* <Route path="Backup" element={<Backup />} /> */}
          <Route path="Translations" element={<Translations />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
