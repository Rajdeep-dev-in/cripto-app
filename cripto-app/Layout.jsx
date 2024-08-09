import { Outlet } from "react-router-dom"
// import { Home } from "./src/components/Home"
// import { Coins } from "./src/components/Coins"
// import { CoinExchange } from "./src/components/CoinExchange"
import Navbar from "./src/components/Navbar"
import Footer from "./src/components/Footer"

function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout