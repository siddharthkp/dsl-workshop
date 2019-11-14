import React from "react";
import PropTypes from "prop-types";
import { Element } from "./image.elements";

const Image = props => {
  return <Element {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export { Image };
