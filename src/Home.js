import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import jobs from "./assets/data.json";
import Job from "./Job";
import FilterBar from './FilterBar';
import { Box } from "@material-ui/core";

function Home() {
  const [filter, setFilter] = useState([]);
  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <FilterBar filter={filter} />
      </Grid>
      <Grid item xs={8}>
        {jobs.map(job => (
          <Box mb={4}>
            <Job key={job.id} {...job} setFilter={setFilter} />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
