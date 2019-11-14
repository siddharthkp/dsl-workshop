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

// import "./button.scss";
//
// function Button({ variant, ...props }) {
//   return (
//     <button className={`btn ${variant}`} {...props}>
//       {props.children}
//     </button>
//   );
// }

// Option 2: With css-in-js

import { Element } from "./button.elements";

function Button({ variant, ...props }) {
  return (
    <Element variant={variant} {...props}>
      {props.children}
    </Element>
  );
}

// Common properties:

Button.defaultProps = {
  variant: "primary",
  size: "medium"
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "accent",
    "success"
  ]),
  size: PropTypes.oneOf(["large", "medium", "small", "xsmall"])
};

export { Button };
