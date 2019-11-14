import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.space[2]};
  border-radius: ${theme.radii[2]};
  width: ${props => props.width};
  box-shadow: ${theme.shadows.shallow};
`;

const Body = styled.div``;

const Footer = styled.div`
  margin-top: ${theme.space[1]};
`;

export { Element, Body, Footer };
