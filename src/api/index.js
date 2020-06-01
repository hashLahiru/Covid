import axios from "axios";

const url = "https://www.hpb.health.gov.lk/api/get-current-statistical";

export const fetchData = async () => {
  try {
    const {
      data: {
        local_total_cases,
        local_recovered,
        local_deaths,
        local_active_cases,
        update_date_time,
      },
    } = await axios.get(url);

    return {
      local_total_cases,
      local_recovered,
      local_deaths,
      local_active_cases,
      update_date_time,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url);
    console.log(data);

    /*
    const modifiedData = data.map((dailyData) => ({
      local_total_cases: dailyData.local_total_cases.total,
      local_deaths: dailyData.local_deaths.total,
      update_date_time: dailyData.update_date_time,
    }));
*/
    return data;
    //return modifiedData;
  } catch (error) {}
};
