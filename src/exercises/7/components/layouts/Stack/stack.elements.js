import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  * + * {
    margin-left: ${props => theme.space[props.gap]};
  }
`;

export { Element };
