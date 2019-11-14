import React from "react";
import { Image } from "./";

export default {
  title: "Image"
};

export const simple = () => (
  <Image
    width={200}
    height={150}
    src="https://cdn.dribbble.com/users/666045/screenshots/3611646/artboard_3.png"
  />
);
