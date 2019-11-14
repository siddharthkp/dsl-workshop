import React from "react";
import PropTypes from "prop-types";

import { Avatar, Badge, Stack } from "../../index";
import { Element } from "./avatar-block.elements";

const AvatarBlock = props => {
  return (
    <Element as={Stack} align="center">
      <Avatar size="xsmall" src={props.avatar} />
      <a href={props.url}>{props.name}</a>
      {props.label ? <Badge>{props.label}</Badge> : null}
    </Element>
  );
};

AvatarBlock.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  label: PropTypes.string,
  avatar: PropTypes.string
};

AvatarBlock.defaultProps = {};

export { AvatarBlock };
