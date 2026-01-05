import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import useDirection from '../hooks/useDirection';
import Footer from '../components/footer';
const Layout = () => {
    useDirection();
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout