import styled from "styled-components";
import theme from "../../../theme/theme.js";
import { Element as AvatarBlock } from "../AvatarBlock/avatar-block.elements";

const Element = styled.div`
  width: 200px;

  ${AvatarBlock} {
    margin-top: ${theme.space[2]};
  }
`;

export { Element };
