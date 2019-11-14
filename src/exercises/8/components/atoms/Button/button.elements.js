import styled from "styled-components";
import theme from "../../../theme/theme.css";

export const Element = styled.button`
  font-size: ${theme.fontSizes[2]};
  padding: 0 ${theme.space[3]};
  border: 1px solid;
  border-radius: ${theme.radii.medium};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  background-color: ${props => variantMap[props.variant].normal.background};
  border-color: ${props => variantMap[props.variant].normal.border};
  color: ${props => variantMap[props.variant].normal.text};

  &:hover {
    background-color: ${props => variantMap[props.variant].hover.background};
    border-color: ${props => variantMap[props.variant].hover.border};
    color: ${props => variantMap[props.variant].hover.text};
  }
  &:focus {
    background-color: ${props => variantMap[props.variant].focus.background};
    border-color: ${props => variantMap[props.variant].focus.border};
    color: ${props => variantMap[props.variant].focus.text};
  }
  &:disabled {
    background-color: ${props => variantMap[props.variant].normal.background};
    border-color: ${props => variantMap[props.variant].normal.border};
    color: ${props => variantMap[props.variant].normal.text};
  }
`;

const variantMap = {
  primary: {
    normal: {
      background: theme.colors.brand[500],
      border: theme.colors.brand[500],
      text: theme.colors.white
    },
    hover: {
      background: theme.colors.brand[700],
      border: theme.colors.brand[700],
      text: theme.colors.white
    },
    focus: {
      background: theme.colors.brand[900],
      border: theme.colors.white[900],
      text: theme.colors.white
    }
  },
  secondary: {
    normal: {
      background: "transparent",
      border: theme.colors.borderInfo,
      text: theme.colors.text.primaryLight
    },
    hover: {
      background: "transparent",
      border: theme.colors.text.primary,
      text: theme.colors.text.primary
    },
    focus: {
      background: "transparent",
      border: theme.colors.accent[500],
      text: theme.colors.accent[500]
    }
  },
  info: {
    normal: {
      background: theme.colors.info[500],
      border: theme.colors.info[500],
      text: theme.colors.text.primaryLight
    },
    hover: {
      background: theme.colors.accent[500],
      border: theme.colors.accent[500],
      text: theme.colors.white
    },
    focus: {
      background: theme.colors.accent[700],
      border: theme.colors.accent[700],
      text: theme.colors.white
    }
  },
  accent: {
    normal: {
      background: theme.colors.accent[500],
      border: theme.colors.accent[500],
      text: theme.colors.white
    },
    hover: {
      background: theme.colors.accent[700],
      border: theme.colors.accent[700],
      text: theme.colors.white
    },
    focus: {
      background: theme.colors.accent[900],
      border: theme.colors.accent[900],
      text: theme.colors.white
    }
  },
  success: {
    normal: {
      background: theme.colors.success[500],
      border: theme.colors.success[500],
      text: theme.colors.white
    },
    hover: {
      background: theme.colors.success[700],
      border: theme.colors.success[700],
      text: theme.colors.white
    },
    focus: {
      background: theme.colors.success[900],
      border: theme.colors.success[900],
      text: theme.colors.white
    }
  }
};
