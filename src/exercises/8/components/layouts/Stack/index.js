import React from "react";
import PropTypes from "prop-types";
import { Element } from "./stack.elements.js";
import theme from "../../../theme/theme.js";

function Stack(props) {
  return <Element {...props} />;
}

Stack.propTypes = {
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  /** index from theme.space */
  gap: PropTypes.number
};

Stack.defaultProps = {
  justify: "flex-start", // css default
  align: "stretch", // css default
  gap: 0
};

export { Stack };
