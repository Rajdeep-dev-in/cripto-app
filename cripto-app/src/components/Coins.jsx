import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import CurrencyCard from "./CurrencyCard.jsx";
import {Bars} from "react-loader-spinner";

function Coins() {
  const [currency, setCurrency] = useState("inr");
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState("false");

  const pages = new Array(20).fill(1);
  //const [coinSymbol , setCoinSymbol] = useState('₹')

  const coinSymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    async function fetchCoins() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${server}//coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
      } catch (err) {
        setLoading(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, [currency, page]);

  function changePage(value) {
    console.log("hello page", value);

    setPage(value);
  }

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Bars width="100" height="100" color="#202020" />
        </div>
      ) : (
        <div className=" mx-5 my-4">
          <div className=" flex justify-start items-center mx-3 my-5 gap-x-2 text-xl">
            <div>
              <input
                type="radio"
                id="inr"
                value="inr"
                onChange={(e) => setCurrency(e.target.value)}
                checked={currency === "inr"}
              />
              <label htmlFor="inr" className="mx-2">
                Inr
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="usd"
                value="usd"
                onChange={(e) => setCurrency(e.target.value)}
                checked={currency === "usd"}
              />
              <label htmlFor="inr" className="mx-2">
                Usd
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="eur"
                value="eur"
                onChange={(e) => setCurrency(e.target.value)}
                checked={currency === "eur"}
              />
              <label htmlFor="eur" className="mx-2">
                Eur
              </label>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {coins.map((coin) => (
              <CurrencyCard
                key={coin.id}
                id={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                coinSymbol={coinSymbol}
              />
            ))}
          </div>
          <div className=" flex flex-wrap justify-center items-center gap-x-2 my-2">
            {pages.map((p, index) => (
              <button
                key={index}
                className={
                  page !== index + 1
                    ? ` bg-black text-white p-2 rounded-lg cursor-pointer`
                    : ` bg-neutral-500 text-white p-2 rounded-lg cursor-pointer`
                }
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Coins;
