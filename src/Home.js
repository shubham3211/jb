import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import jobs from "./assets/data.json";
import Job from "./Job";
import FilterBar from "./FilterBar";
import { Box } from "@material-ui/core";

function Home() {
  const [filter, setFilter] = useState([]);
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <img
          src={require("./assets/images/bg-header-desktop.svg")}
          style={{ width: "100%", height: "100px", marginBottom: '40px' }}
        />
      </Grid>
      <Grid item xs={8}>
        <FilterBar filter={filter} setFilter={setFilter} />
      </Grid>
      <Grid item xs={8}>
        {!filter.length
          ? jobs.map(job => (
              <Box mb={4}>
                <Job key={job.id} {...job} setFilter={setFilter} />
              </Box>
            ))
          : jobs
              .filter(job => {
                for (let i = 0; i < filter.length; i++) {
                  if (
                    (job.languages && job.languages.includes(filter[i])) ||
                    (job.tools && job.tools.includes(filter[i]))
                  ) {
                    return true;
                  }
                }
                return false;
              })
              .map(job => (
                <Box mb={4}>
                  <Job key={job.id} {...job} setFilter={setFilter} />
                </Box>
              ))}
      </Grid>
    </Grid>
  );
}

export default Home;
