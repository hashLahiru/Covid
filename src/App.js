import React from "react";

import { Cards, Chart } from "./components";
import styles from "./App.module.css";

<<<<<<< HEAD
import { fetchDailyData } from "./api";
=======
import { fetchData } from "./api";
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
<<<<<<< HEAD
    const fetchedData = await fetchDailyData();
=======
    const fetchedData = await fetchData();
>>>>>>> b35afb76b1fddc94b898bdce0aaf032b6d120909
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
      </div>
    );
  }
}

export default App;
