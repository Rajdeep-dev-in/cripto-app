import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
//import Home  from "./src/components/Home"
import Home from './components/Home.jsx'
import  Coins  from "./components/Coins.jsx"
import  CoinExchange  from "./components/CoinExchange.jsx"
import CoinDetails from './components/CoinDetails.jsx'
import Layout from '../Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='coins' element={<Coins />} />
      <Route path='coinExchange' element={<CoinExchange />} />
      <Route path='coins/:id' element={<CoinDetails />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

export const server = `https://api.coingecko.com/api/v3`;
