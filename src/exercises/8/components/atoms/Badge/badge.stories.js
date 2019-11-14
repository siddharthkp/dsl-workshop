import React from "react";
import { Badge } from "./";
import theme from "../../../theme/theme.js";
import docsPage from "./badge.mdx";

export default {
  title: "Badge",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <>
    <Badge color={theme.colors.brand[500]}>Pro</Badge>
  </>
);

export const color = () => (
  <>
    <Badge>Pro</Badge>
    <br />
    <Badge color={theme.colors.brand[500]}>Pro</Badge>
    <br />
    <Badge>Team</Badge>
    <br />
    <Badge color={theme.colors.accent[300]}>Team</Badge>
  </>
);
