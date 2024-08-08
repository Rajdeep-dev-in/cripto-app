
import { Link } from "react-router-dom"

function CurrencyCard({image , name , id , price, symbol, coinSymbol}){
    


    return(

        <>
            <Link 
             to={`/coins/${id}`}  
            className=" w-44 py-3 px-2 bg-slate-300 rounded-md shadow-lg flex flex-col items-center gap-y-2
             hover:scale-90" >
                <img src={image} className=" w-24 h-24"/>
                <p className=" font-bold">{symbol}</p>
                <p>{name}</p>
                <p>{coinSymbol} {price}</p>
            </Link>
        </>
    )
}

export default CurrencyCard