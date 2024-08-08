import {useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import CoinCard from './CoinCard.jsx'

function CoinExchange(){

    const [exchanges , setExchanges] = useState([])

    useEffect(() => { 
        async function fetchExchange(){
            const {data} = await axios.get(`${server}/exchanges`)
            setExchanges(data)
            
        }

        fetchExchange()
    } , [])
    return(
        <>
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
        </>
    )
}

export default CoinExchange