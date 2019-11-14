import React from "react";

import { Stack } from "./";
import { Avatar, Icon } from "../../index";
import docsPage from "./stack.mdx";

export default {
  title: "Stack",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <Stack align="center">
    <Avatar
      size="xsmall"
      src="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
    <span>Guille Mesyngier</span>
    <Icon name="check" color="green" />
  </Stack>
);

export const Flex = () => (
  <Stack justify="space-between">
    <Avatar
      size="xsmall"
      src="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
    <span>Guille Mesyngier</span>
    <Icon name="check" color="green" />
  </Stack>
);

export const gap = () => (
  <Stack align="center" gap={1}>
    <Avatar
      size="xsmall"
      src="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
    <span>Guille Mesyngier</span>
    <Icon name="check" color="green" />
  </Stack>
);
