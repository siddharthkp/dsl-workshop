import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.i`
  display: inline-flex;
  color: ${props => props.color};
  svg {
    width: ${theme.sizes.icon};
    height: ${theme.sizes.icon};
  }
`;

export { Element };
