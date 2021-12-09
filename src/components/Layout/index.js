import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from "./Footer"
const Index = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index
