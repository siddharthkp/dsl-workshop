import React from "react";
import { Counter } from "./";
import docsPage from "./counter.mdx";

export default {
  title: "Counter",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <>
    <Counter value={64} icon="heart" />
    <Counter value={20} icon="comment" />
  </>
);
