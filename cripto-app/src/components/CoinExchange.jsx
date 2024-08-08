import {useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import CoinCard from './CoinCard.jsx'
import {Bars} from "react-loader-spinner";

function CoinExchange(){

    const [exchanges , setExchanges] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => { 
        async function fetchExchange(){
            try{
                setLoading(true)
                const {data} = await axios.get(`${server}/exchanges`)
                setExchanges(data)
            }catch(err){
                console.log(err);
                setLoading(false)
                
            }finally{
                setLoading(false)
            }   
            
        }

        fetchExchange()
    } , [])
    return(
        <>
            {
                isLoading ? 
                    <div className='w-screen h-screen flex justify-center items-center'>
                        <Bars width="100" height="100" color="#202020" />
                    </div>
                : 
                <div className=' mx-5 my-4'>
                <div className='flex flex-wrap justify-center items-center gap-4'>
                    {exchanges.map((eCoin) => (
                        <CoinCard 
                        key={eCoin.id}
                        name={eCoin.name} 
                        url={eCoin.url} 
                        image={eCoin.image} 
                        rank={eCoin.trust_score_rank} 
                        
                        />
                    ))}
                </div>
            </div>
            }
        </>
    )
}

export default CoinExchange