 import {Menu, X} from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'



function Navbar(){

    const [mobileView, setMobileView] = useState(false);

    const toggleView = () =>{
        setMobileView(!mobileView)
    }
    return(
        <>
            <nav className='  bg-black top-0 py-2 px-2 '>
                <div className=" container mx-auto px-4  ">
                    <div className='flex justify-between items-center text-white'>
                        <Link 
                            to='/'
                            className="px-4 py-2 flex justify-center items-center gap-x-2">
                            <img src='https://images.pexels.com/photos/14354107/pexels-photo-14354107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='logo' className='h-10 w-10 rounded-full' /><span className='text-white text-xl font-bold'>CryptoCore</span>
                        </Link>
                        <div className=" hidden px-10 lg:flex justify-center items-center gap-x-5 text-xl font-bolds">
                            <NavLink to='/' className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer`}>
                                Home
                            </NavLink>
                            <NavLink to='/coins' className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer`}>
                                Coins
                            </NavLink>
                            <NavLink to='/coinExchange' className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer`}>
                                Exchange
                            </NavLink>
                        </div>
                        <div className=' lg:hidden md:flex flex-col justify-end'>
                            <button
                                onClick={toggleView}
                                className='text-white'
                            >
                                { mobileView ? <X /> : <Menu /> }
                            </button>
                        </div>
                    </div>
                    {
                        mobileView && <div className="bg-black flex flex-col justify-center items-center gap-y-4 mt-4 text-lg">
                            <NavLink to='/' onClick={toggleView} className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer mb-5`}>
                                Home
                            </NavLink>
                            <NavLink to='/coins' onClick={toggleView} className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer mb-5`}>
                                Coins
                            </NavLink>
                            <NavLink to='/coinExchange' onClick={toggleView} className={({isActive}) => `${isActive ? 'text-slate-400': "text-white"} hover:text-green-500 cursor-pointer mb-5`}>
                                Coins Exchange
                            </NavLink>
                        </div>
                       }
                </div>
            </nav>
        </>
    )
}

export default Navbar