import React from "react";
import { Shot } from "./";
import docsPage from "./shot.mdx";

export default {
  title: "Shot",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <>
    <Shot />
  </>
);
