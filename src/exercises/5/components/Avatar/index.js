import React from "react";
import PropTypes from "prop-types";

/** You could build this component with
    css + classnames or with css-in-js

    It's possible to achieve the same results
    with both.

    Uncomment the option that works better for
    you and your team
*/

// Option 1: With class names and css

import "./avatar.scss";

function Avatar({ size, ...props }) {
  return <img className="avatar" {...props} />;
}

// Option 2: With css-in-js

// import { Element } from "./avatar.elements";
//
// function Avatar({ size, ...props }) {
//   return <Element {...props} />;
// }

// Common properties:

Avatar.defaultProps = {
  size: "medium"
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"])
};

export { Avatar };
