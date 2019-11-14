import React from "react";
import PropTypes from "prop-types";

import { Element } from "./counter.elements";
import { Stack, Icon } from "../../index";

const Counter = ({ icon, value, ...props }) => {
  return (
    <Element as={Stack} align="center" {...props}>
      {icon ? <Icon name={icon} /> : null}
      {value}
    </Element>
  );
};

Counter.propTypes = {
  /** supports all the strings from the name prop of Icon */
  icon: Icon.propTypes.name,
  value: PropTypes.number
};

export { Counter };
