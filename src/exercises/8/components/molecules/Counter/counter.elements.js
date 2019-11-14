import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.span`
  color: ${props => props.color};
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.text.subtle};
  i {
    margin-right: ${theme.space[1]};
  }
`;

export { Element };
