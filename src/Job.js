import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Job(props) {
  function filterJobs(filter) {
    props.setFilter(filterList => {
      let arr = [...filterList];
      !arr.includes(filter) && arr.push(filter);
      return arr;
    });
  }
  return (
    <Paper elevation={3}>
      <Box pl={3} pr={3} pt={3} pb={2}>
        <Grid container>
          <Grid item xs={2}>
            <img
              src={require(`./assets/images/${props.logo.split("/").pop()}`)}
            />
          </Grid>
          <Grid item xs={5}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                style={{ color: "hsl(180, 29%, 50%)", fontWeight: "700" }}
              >
                {props.company}{" "}
                {props.new ? <span className="new">new</span> : null}{" "}
                {props.featured ? (
                  <span className="featured">featured</span>
                ) : (
                  <></>
                )}
              </Grid>
              <Grid item xs={12}>
                <div className="job-role">{props.position}</div>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary">
                  {props.postedAt} . {props.contract} . {props.location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              style={{ width: "100%", height: "100%" }}
              alignItems="center"
            >
              {props.languages
                ? props.languages.map((language, index) => (
                    <span
                      className="language-label"
                      key={index}
                      onClick={() => filterJobs(language)}
                    >
                      {language}
                    </span>
                  ))
                : null}
              {props.tools
                ? props.tools.map((tool, index) => (
                    <span
                      className="language-label"
                      key={index}
                      onClick={() => filterJobs(tool)}
                    >
                      {tool}
                    </span>
                  ))
                : null}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Job;
