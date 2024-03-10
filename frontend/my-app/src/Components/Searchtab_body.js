import React from "react";
import Filter_searchbar from "./Filter_searchbar";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  for_filter: {
    width: "350px",
    height: "50px",
  },
  for_filterbar: {
    margin: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  for_buttons: {
    width: "80px",
    height: "43px",
    fontFamily: "Afacad",
  },
  for_title: {
    width: "200px",
    height: "43px",
    fontFamily: "Afacad",
    fontSize: "25px",
  },
  for_body: {
    margin: "10px",
    borderRadius: "13px",
    flexGrow: "1",
    backgroundColor: "rgb(255, 247, 241)",
  },
}));

export default function Searchtab_body() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      <div className={classes.for_filterbar}>
        <div className={classes.for_title}>Filters</div>
        <div className={classes.for_filter}>
          <Filter_searchbar />
        </div>
        <div className={classes.for_filter}>
          <Filter_searchbar />
        </div>
        <Button
          variant="outlined"
          className={classes.for_buttons}
          style={{ borderColor: "black", borderWidth: "2px", color: "black" }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          className={classes.for_buttons}
          style={{
            borderColor: "white",
            borderWidth: "2px",
            color: "black",
            backgroundColor: "white",
          }}
        >
          Apply
        </Button>
      </div>
      <div className={classes.for_body}></div>
    </div>
  );
}
