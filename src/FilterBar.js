import React from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

function FilterBar({ filter, setFilter }) {
  return filter.length ? (
    <Box mb={3}>
      <Paper>
        <Box p={5} className="filter-container">
          {filter.map((language, index) => (
            <div>
              <span key={index} className="tool-label">
                {language}
              </span>
              <span
                className="cancel-language"
                onClick={() => {
                  setFilter(filterList =>
                    filterList.filter(item => item != language)
                  );
                }}
              >
                x
              </span>
            </div>
          ))}
          <span className="clear-button" onClick={() => setFilter(() => [])}>
            clear
          </span>
        </Box>
      </Paper>
    </Box>
  ) : null;
}

export default FilterBar;
