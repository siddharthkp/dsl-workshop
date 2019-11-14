import React from "react";
import PropTypes from "prop-types";

import { Element, Body, Footer } from "./card.elements";

const Card = props => {
  return <Element {...props} />;
};

Card.Body = Body;
Card.Footer = Footer;

export { Card };
