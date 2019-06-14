import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import { config } from "../core";

export default (classes) => (
  <div>
    <div className={classes.right}>
      &copy; {1900 + new Date().getYear()} , made with{" "}
      <Favorite className={classes.icon}/> by{" "}
      <a href={config.app.baseUrl}>Labor Matrix</a> for a
      better web
    </div>
  </div>
)
