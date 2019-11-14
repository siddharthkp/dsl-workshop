import React from "react";
import PropTypes from "prop-types";

import { AvatarBlock, Card, Counter, Image, Icon, Stack } from "../../index";
import { Element } from "./shot.elements.js";
import theme from "../../../theme/theme.js";

function Shot() {
  return (
    <Element>
      <Card>
        <Card.Body>
          <Image src="https://cdn.dribbble.com/users/927565/screenshots/3929733/roadshow-dribbble.png" />
        </Card.Body>
        <Card.Footer>
          <Stack justify="space-between">
            <div>
              <Icon name="paperclip" color={theme.colors.text.subtle} />
            </div>
            <Stack gap={2}>
              <Counter value={629} icon="view" />
              <Counter value={2} icon="comment" />
              <Counter value={48} icon="heart" />
            </Stack>
          </Stack>
        </Card.Footer>
      </Card>
      <AvatarBlock
        name="Guille Mesyngier"
        avatar="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
      />
    </Element>
  );
}

Shot.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number
};

Shot.defaultProps = {};

export { Shot };
