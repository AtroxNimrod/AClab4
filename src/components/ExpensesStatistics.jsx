import React from 'react';
// import { useParams } from 'react-router-dom';
import Chart from "react-apexcharts";

const ExpensesStatistics = () => {
//   let params = useParams();

  return (
    <div>
      <h2>Expenses Statistics</h2>
      <Chart
              options={{
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                    categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"]
                    //categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
              }}
              series={[
                {
                  name: "expenses",
                  data: [5305, 6722, 4980, 6999, 6103, 5298, 7050, 6505]
                //   data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
              ]}
              type="bar"
              width="500"
            />
      {/* <p>AccountId: {params.accountId}</p> */}
    </div>
  );
};

export default ExpensesStatistics;