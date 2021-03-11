import classes from "./Loading.module.css";
import React from "react";

export const useLoading = (loading: "" | "idle" | "pending") => {
  let element = null;
  if (loading !== "idle") {
    element = <div className={classes.loader}></div>;
  } else {
    element = null;
  }

  return element;
};
