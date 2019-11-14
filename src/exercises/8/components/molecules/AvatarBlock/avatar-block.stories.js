import React from "react";
import { AvatarBlock } from "./";
import docsPage from "./avatar-block.mdx";

export default {
  title: "AvatarBlock",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <>
    <AvatarBlock
      name="Guille Mesyngier"
      url="https://dribbble.com/gmesyngier"
      avatar="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
  </>
);

export const withLabel = () => (
  <>
    <AvatarBlock
      name="Guille Mesyngier"
      url="https://dribbble.com/gmesyngier"
      label="pro"
      avatar="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
    />
    <AvatarBlock
      name="Auth0"
      url="https://dribbble.com/auth0"
      label="team"
      avatar="https://cdn.dribbble.com/users/752778/avatars/small/bdd1ffd9a06d66f3782a60f3d2e3444d.png?1512067400"
    />
  </>
);
