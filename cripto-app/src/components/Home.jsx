import Btc from '../assets/btc.png'
function Home(){
    return(
        <>
            <div className=" bg-black flex items-center justify-center  h-screen">
                <div className=' h-full flex justify-center items-center flex-col gap-y-4 my-3 lg:my-5'>
                    <img 
                        src={Btc}
                        className=' w-52 h-40 animate-bounce'
                    />
                    <h2 className='text-white text-2xl lg:text-6xl'>Welcome to CryptoCore</h2>
                </div>
            </div>
        </>
    )
}

export default Home