import axios from "axios";

<<<<<<< HEAD
const url = "https://www.hpb.health.gov.lk/api/get-current-statistical";
=======
const url = "";
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909

export const fetchData = async () => {
  try {
    const {
      data: {
        local_total_cases,
        local_recovered,
        local_deaths,
<<<<<<< HEAD
        local_active_cases,
=======
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909
        update_date_time,
      },
    } = await axios.get(url);

    return {
      local_total_cases,
      local_recovered,
      local_deaths,
<<<<<<< HEAD
      local_active_cases,
=======
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909
      update_date_time,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
<<<<<<< HEAD
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

/*
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(update_date_time);

    const modifiedData = data.map((dailyData) => ({
      local_total_cases: dailyData.local_total_cases.total,
      local_deaths: dailyData.local_deaths.total,
      update_date_time: dailyData.update_date_time.total,
=======
    const { data } = await axios.get(update_date_time);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.local_total_cases.total,
      deaths: dailyData.local_deaths.total,
      date: dailyData.update_date_time,
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909
    }));

    return modifiedData;
  } catch (error) {}
};
<<<<<<< HEAD
*/
=======
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909
