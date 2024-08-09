import {useEffect, useState} from 'react'
import axios from 'axios'
import { server } from '../main' 
import { useParams } from 'react-router-dom'
import { ChevronUp, ChevronDown, Hash } from 'lucide-react'
import Chart from './Chart.jsx'
import {Bars} from "react-loader-spinner";

function CoinDetails(){

    const params = useParams()
    //const [day , setDay] = useState(1)
    const [coinDetails, setCoinDetails] = useState({})
    const [chartData, setChartData] = useState([])
    const [currency , setCurrency] = useState("inr")
    const [days, setDays] = useState("24h")
    const [isLoading , setLoading] = useState(false)
    const daysArr = ["24h", "7d" , "14d", "30d", "60d", "200d", "1y", "max"]
    const coinSymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'
    useEffect(() => {
        async function fetchCoin(){
            try {
                setLoading(true)
                const {data} = await axios.get(`${server}/coins/${params.id}`)
                const {data: chatValue} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
                setChartData(chatValue.prices)
                console.log(chatValue, 'chart data');
                setCoinDetails(data) 
                
            } catch (error) {
                setLoading(false)
                console.log(error);
                
            } finally{
                setLoading(false)
            }   
        } 
        fetchCoin()
    }, [params.id, days, currency])

    function swapChartData(payload){
        switch (payload) {
            case "7d":
                setDays("7d")
                break;
            case "14d":
                setDays("14d")
                break;
            case "30d":
                setDays("30d")
                break;
            case "60d":
                setDays("60d")
                break;
            case "200d":
                setDays("200d")
                break;
            case "1y":
                setDays("1y")
                break;
            case "max":
                setDays("max")
                break;
            default:
                setDays("24h")
                break;
        }
    }
    return(
        <>
            <div className=" w-full min-w-48 px-5 lg:px-10 py-4">
                <div className=' w-full '>
                    <Chart 
                        chartArr={chartData}
                        currencySymbol={coinSymbol}
                        days={days}
                    />    
                </div>
                <div className=' flex justify-center items-center flex-wrap gap-2'>
                    {daysArr.map((val) => (
                        <button 
                            className=" px-2 py-2 bg-black text-white cursor-pointer rounded-md"
                            key={val}
                            onClick={() => swapChartData(val)}
                        >
                            {val}
                        </button>
                    ))}
                </div>
                <div className=' flex justify-start items-center mx-3 my-5 gap-x-2 text-xl'>
                    <div>
                    <input 
                    type="radio" 
                    id='inr'
                    value="inr" 
                    onChange={(e) => setCurrency(e.target.value)}
                    checked={currency === 'inr'}
                    />
                    <label htmlFor='inr' className='mx-2'>Inr</label>
                    </div>
                    <div>
                    <input 
                    type="radio" 
                    id='usd'
                    value="usd" 
                    onChange={(e) => setCurrency(e.target.value)}
                    checked={currency === 'usd'}
                    />
                    <label htmlFor='inr' className='mx-2'>Usd</label>
                    </div>
                    <div>
                    <input 
                    type="radio" 
                    id='eur'
                    value="eur" 
                    onChange={(e) => setCurrency(e.target.value)}
                    checked={currency === 'eur'}
                    />
                    <label htmlFor='eur' className='mx-2'>Eur</label>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p>Last Updated On {Date(coinDetails.last_updated).split("G")[0]}</p>
                </div>
                {
                    isLoading ? 
                    <div className=' h-screen flex justify-center items-center'>
                        <Bars width="100" height="100" color="#202020" />
                    </div>
                    :   
                    <div>
                        <div className=' flex flex-col justify-start items-start gap-y-4'>
                    <img 
                        src={coinDetails?.image?.large} 
                        alt='Bitcoin_Image' 
                        className=' w-24'
                    />
                    <p className=' font-semibold'>{coinDetails.name}</p>
                    <h3
                        className=' font-bold text-2xl'
                    >
                        { coinSymbol} {coinDetails?.market_data?.current_price[`${currency}`]}
                    </h3>
                    <p className='flex items-center'>
                        {
                            coinDetails?.market_data?.price_change_percentage_24h > 0 ? <ChevronUp color="#34940a" /> : <ChevronDown color="#ca1c1c" />
                        } <span>{coinDetails?.market_data?.price_change_percentage_24h}%</span>
                    </p>
                    <h3 className='bg-black px-2 py-2 text-2xl flex items-center text-white'>
                    <Hash size={20} color="#fff" /> {coinDetails?.market_cap_rank}
                    </h3>
                </div>
                <div>
                    <h3 className='text-4xl font-bold text-center lg:text-left lg:mx-2 my-2 lg:my-4'>Market Stats</h3>
                        <p className='flex justify-between items-center my-3'>
                            <span className='font-bold'>Max Supply</span><span>{coinDetails?.market_data?.max_supply}</span>
                        </p>
                        <p className='flex justify-between items-center my-3'>
                            <span className='font-bold'>Circulating Supply</span><span>{coinDetails?.market_data?.circulating_supply}</span>
                        </p>
                        <p className='flex justify-between items-center my-3'>
                            <span className='font-bold'>Market Cap</span><span>{coinDetails?.market_data?.market_cap[`${currency}`]}</span>
                        </p>
                        <p className='flex justify-between items-center my-3'>
                            <span className='font-bold'>All Time Low</span><span>{coinSymbol}{coinDetails?.market_data?.atl[`${currency}`]}</span>
                        </p>
                        <p className='flex justify-between items-center my-3'>
                            <span className='font-bold'>All Time High</span><span>{coinSymbol}{coinDetails?.market_data?.ath[`${currency}`]}</span>
                        </p>
                </div>
                    </div>
                }
                
                
            </div>
        </>
    )
}

export default CoinDetails