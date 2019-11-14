import React from "react";
import PropTypes from "prop-types";
import icons from "./icons";

import { Element } from "./icon.elements";

const Icon = ({ name, color, ...props }) => {
  return (
    <Element color={color} {...props}>
      {icons[name]}
    </Element>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "check",
    "heart",
    "link",
    "list",
    "paperclip",
    "comment",
    "view"
  ]).isRequired,
  color: PropTypes.string
};

export { Icon };
