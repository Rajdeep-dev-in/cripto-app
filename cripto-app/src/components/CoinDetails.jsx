import {useEffect, useState} from 'react'
import axios from 'axios'
import { server } from '../main' 
import { useParams } from 'react-router-dom'

function CoinDetails(){

    const params = useParams()
    const [day , setDay] = useState(1)
    const [coinDetails, setCoinDetails] = useState({})

    useEffect(() => {
        async function fetchCoin(){
            const {data} = await axios.get(`${server}/coins/${params.id}`)
            console.log(data);
            setCoinDetails(data)
            
        } 

        fetchCoin()
    })
    return(
        <>
            <h1>WELCOME TO COIN ID PAGE</h1>
        </>
    )
}

export default CoinDetails