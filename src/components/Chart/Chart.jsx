import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ local_new_cases }) => local_new_cases),
        datasets: [
          {
            data: dailyData.map(({ local_total_cases }) => local_total_cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ local_deaths }) => local_deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};
export default Chart;
