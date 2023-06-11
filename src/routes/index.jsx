import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePageBook';
import TrackPage from '../components/Track';
import Workshopage from '../components/Workshop';
import Booking from '../components/Booking';

const HomePagee = {
    path:'/',
    element: <HomePage />
}

const Bookinge = {
    path:'/book-repair',
    element: <Booking />
}

const Track = {
    path:'/track',
    element: <TrackPage />,
}

const Workshop = {
    path:'/auth/login',
    element: <Workshopage />,
}
// const aboutroute={
//     path:'/about',
//     element:<About/>
// }


const routes = createBrowserRouter([
    HomePagee,
    Bookinge,
    Track,
    Workshop,
    // productsDetailsRoute,
    // aboutroute
])

export default routes;