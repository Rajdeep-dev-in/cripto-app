import { Outlet } from "react-router-dom"
// import { Home } from "./src/components/Home"
// import { Coins } from "./src/components/Coins"
// import { CoinExchange } from "./src/components/CoinExchange"
import Navbar from "./src/components/Navbar"

function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout