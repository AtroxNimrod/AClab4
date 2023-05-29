import React from 'react';
// import { useParams } from 'react-router-dom';
import Chart from "react-apexcharts";

const CashBalance = () => {
//   let params = useParams();

  return (
    <div>
      <h2>Cash Balance</h2>
      <Chart
              options={{
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                    categories: ["09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov",
                    "19 Nov", "20 Nov"]

                },
                markers: {
                    size: 4,
                }
              }}
              series={[
                {
                  name: "balance",
                  data: [12700, 12466, 12220, 11850, 10150, 10150, 10150, 9080, 9020, 8500, 8500, 8450]
                }
              ]}
              type="line"
              width="500"
            />
      {/* <p>AccountId: {params.accountId}</p> */}
    </div>
  );
};

export default CashBalance;