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
import RepDefects from './components/repdefects'
import RepDevices from './components/repdevices'
import Report from './components/report'
import RepPriorities from './components/reppriorities'
import RepStatus from './components/repstatus'
import Settings from './components/settings'
import Translations from './components/translations'
import Users from './components/users'
// import routes from "./routes"
import UserRole from './components/userrole'
import  Navbar  from './components/navbar'
import  Navber  from './components/navber'
// import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePageBook';
import TrackPage from './components/Track';
import Workshopage from './components/Workshop';
import Booking from './components/Booking';
import BookingW2 from "./components/BookingW2"
import './App.css'


let navbarCheck = () => {

    if(window.location.pathname == "/"){
      return <Navber />
    }else if(window.location.pathname == "/book-repair"){
      return <Navber />
    }
    else if(window.location.pathname == "/track"){
      return <Navber />
    }
    else if(window.location.pathname == "/auth/login"){
      return <Navber />
    }
    else if(window.location.pathname == "/book-repair-widget-2"){
      return <Navber />
    }
    // else if(window.location.pathname == "/"){
    //   return <Navber />
    // }
    else{
      return <Navbar />
    }
  
}

function App() {
//   const HomePagee = {
//     path:'/',
//     element: <HomePage />
// }

// const Bookinge = {
//     path:'/book-repair',
//     element: <Booking />
// }

// const Track = {
//     path:'/track',
//     element: <TrackPage />,
// }

// const Workshop = {
//     path:'/auth/login',
//     element: <Workshopage />,
// }
// const aboutroute={
//     path:'/about',
//     element:<About/>
// }


// const routes = createBrowserRouter([
//     HomePagee,
//     Bookinge,
//     Track,
//     Workshop,
//     // productsDetailsRoute,
//     // aboutroute
// ])
  return (
    
    <>
      {/* <h1 className='bg-red-800 text-4xl'>React Router</h1> */}
    
      {navbarCheck()}
      {/* <RouterProvider  router={routes}/> */}
      <Routes>







        <Route path="/" element={<HomePage />} />
        <Route path="/book-repair" element={<Booking />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/auth/login" element={<Workshopage />} />
        <Route path="/book-repair-widget-2" element={<BookingW2 />} />
       
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="RepairOrders" element={<RepOrder />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="RepairableDevices" element={<RepDevices />} />
          <Route path="RepairableDefects" element={<RepDefects />} />
          <Route path="QuickReplies" element={<QuickReplies />} />
          <Route path="RepairStatus" element={<RepStatus />} />
          <Route path="RepairPriorities" element={<RepPriorities />} />
          <Route path="CustomPages" element={<CustPages />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Report" element={<Report />} />
          <Route path="Users" element={<Users />} />
          <Route path="UserRoles" element={<UserRole />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Backup" element={<Backup />} />
          <Route path="Translations" element={<Translations />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
