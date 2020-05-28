import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({
  data: { local_total_cases, local_recovered, local_deaths, update_date_time },
}) => {
  if (!local_total_cases) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={local_total_cases}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(update_date_time).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Active cases</Typography>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={local_recovered}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(update_date_time).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Recovered cases</Typography>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={local_deaths}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(update_date_time).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Death cases</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
