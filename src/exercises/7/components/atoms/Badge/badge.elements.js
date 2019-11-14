import styled from "styled-components";
import theme from "../../../theme/theme.js";

/** sometimes you want to build components
    that don't match the scale perfectly.

    It's okay to have such cases but they
    come with the additional responsibility
    of keeping track of them as changes to the
    tokens/scale will not change the components

    We call them out in variables as magic-numbers.
 */

const magicPadding = "2px 3px";
const magicFontSize = "10px";

const Element = styled.span`
  display: inline-block;
  background: ${props => props.color};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.small};

  padding: ${magicPadding};
  font-size: ${magicFontSize};
  font-weight: ${theme.fontWeights.bold};

  text-transform: uppercase;
`;

export const defaultColor = theme.colors.grays[400];

export { Element };
