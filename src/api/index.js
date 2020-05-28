import axios from "axios";

const url = "";

export const fetchData = async () => {
  try {
    const {
      data: {
        local_total_cases,
        local_recovered,
        local_deaths,
        update_date_time,
      },
    } = await axios.get(url);

    return {
      local_total_cases,
      local_recovered,
      local_deaths,
      update_date_time,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(update_date_time);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.local_total_cases.total,
      deaths: dailyData.local_deaths.total,
      date: dailyData.update_date_time,
    }));

    return modifiedData;
  } catch (error) {}
};
