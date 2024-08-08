

function CoinCard({image , name , rank , url}){
    return(

        <>
            <div className=" w-44 py-3 px-2 bg-slate-300 rounded-md shadow-lg flex flex-col items-center gap-y-2
             hover:scale-90" >
                <img src={image} className=" w-24 h-24"/>
                <p className=" font-bold">{name}</p>
                <p>Rank : {rank}</p>
                <a href={url} target="_blank" className=" underline hover:text-blue-500"> visit this site</a>
            </div>
        </>
    )
}

export default CoinCard