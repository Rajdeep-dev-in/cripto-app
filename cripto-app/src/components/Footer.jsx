import {Linkedin} from 'lucide-react'
import {Mail} from 'lucide-react'
import {Phone} from 'lucide-react'

function Footer(){
    return(
        <>
            <div 
                className="bg-black text-white w-full  border-t-neutral-400"
            >
                <div 
                    className="w-full px-6 py-7 flex lg:flex-row flex-col justify-center lg:justify-between items-center "
                >
                    <div 
                        className=""
                    >
                        <h2 
                            className=" text-2xl lg:text-3xl flex flex-col justify-center lg:justify-start items-center "
                        >This is Official CryptoCore Website fully Developed by <span className="font-bold">Rajdeep Das</span></h2>
                        <div className='flex justify-center lg:justify-start items-center gap-2 my-3'>
                            <div className='px-1 py-1 rounded-full bg-blue-600 cursor-pointer'>
                                <Linkedin size={20} color="#fff" />
                            </div>
                            <div className='px-1 py-1 rounded-full bg-red-600 cursor-pointer'>
                                <Mail size={20} color="#fff" />
                            </div>
                            <div className='px-1 py-1 rounded-full bg-green-600 cursor-pointer'>
                                <Phone size={20} color="#fff" />
                            </div>
                        </div>
                    </div>
                    <p className=" inline px-2 py-2 border border-neutral-300  rounded-md font-bold">CryptoCore</p>
                </div>
            </div>
        </>
    )
}

export default Footer