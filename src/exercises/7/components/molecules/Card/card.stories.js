import React from "react";
import { Card } from "./";
import { Image } from "../../index";

export default {
  title: "Card"
};

export const simple = () => (
  <>
    <Card width="250px">
      <Card.Body>
        <Image src="https://cdn.dribbble.com/users/666045/screenshots/3611646/artboard_3_1x.png" />
      </Card.Body>
      <Card.Footer>footer text</Card.Footer>
    </Card>
  </>
);
