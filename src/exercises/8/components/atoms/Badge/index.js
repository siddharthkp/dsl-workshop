import React from "react";
import PropTypes from "prop-types";

import { Element, defaultColor } from "./badge.elements.js";
import theme from "../../../theme/theme.js";

const Badge = props => {
  return <Element {...props}>{props.children}</Element>;
};

Badge.propTypes = {
  color: PropTypes.string
};

Badge.defaultProps = {
  color: defaultColor
};

export { Badge };
