import React from "react";
import { Icon } from "./";
import theme from "../../../theme/theme.js";
import docsPage from "./icon.mdx";

export default {
  title: "Icon",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <Icon name="heart" color={theme.colors.pinks[700]} />
);

export const all = () => (
  <>
    <Icon name="list" />
    <br />
    <Icon color={theme.colors.greens[500]} name="check" />
    <br />
    <Icon color={theme.colors.pinks[700]} name="heart" />
    <br />
    <Icon color={theme.colors.blues[500]} name="link" />
    <br />
    <Icon color={theme.colors.grays[400]} name="paperclip" />
  </>
);
