import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.img`
  border-radius: 50%;
  width: ${props => theme.sizes.avatar[props.size]};
  height: ${props => theme.sizes.avatar[props.size]};
`;

export { Element };
