import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Chart({chartArr, currencySymbol, days }){
    const prices = []
    const date = []

    for(let i = 0 ; i < chartArr.length; i++ ){
        if(days === "24h") date.push(new Date(chartArr[i][0]).toLocaleTimeString())
        else date.push(new Date(chartArr[i][0]).toLocaleDateString())
        prices.push(chartArr[i][1]);
    }

    const data = {
        labels: date,
        datasets: [
            {
                label: `Price in ${currencySymbol}`,
                data: prices,
                borderColor: "rgb(255,99,132)",
                backgroundColor: "rgba(255,99,132,0.5)"
            }
        ]
    }

    return(
        <>
            <Line 
            options={{
                responsive: true,
            }}
            data={data}
            />
        </>
    )
}

export default Chart