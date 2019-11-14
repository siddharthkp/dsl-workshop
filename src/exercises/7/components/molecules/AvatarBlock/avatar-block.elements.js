import styled from "styled-components";
import theme from "../../../theme/theme.js";

const Element = styled.div`
  a {
    color: ${theme.colors.text.link};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    margin: 0 ${theme.space[1]}
    text-decoration: none;
  }
`;

export { Element };
