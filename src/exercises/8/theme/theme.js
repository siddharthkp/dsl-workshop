/*
  This theme file follows System UI Theme Specification
  https://system-ui.com/theme/
*/

const theme = {
  colors: {
    white: "#fff",
    grays: {
      100: "#f4f4f4",
      200: "#e1e1e7",
      300: "#ddd",
      400: "#bbb",
      500: "#999",
      600: "#777",
      700: "#666",
      800: "#444",
      900: "#333"
    },
    pinks: {
      500: "#d95988",
      700: "#df3e7b",
      900: "#c22b65"
    },
    reds: {
      300: "#ed615c",
      500: "#ea3423",
      700: "#ae2318"
    },
    blues: {
      300: "#4fb4de",
      500: "#3a8bbb",
      700: "#1e6189",
      900: "#0c3f5d"
    },
    greens: {
      500: "#7bbb5e",
      700: "#5b9540",
      900: "#3b6d25"
    }
  },
  space: [0, "5px", "10px", "15px", "20px", "25px", "30px"],

  fontSizes: [
    0,
    "12px",
    "13px",
    "14px",
    "15px",
    "16px",
    "18px",
    "20px",
    "30px"
  ],

  fonts: {
    text: "neue-haas-grotesk-text, Helvetica, Arial, sans-serif"
  },

  fontWeights: { default: 400, medium: 500, bold: 700 },

  radii: {
    small: "3px",
    medium: "4px",
    large: "6px"
  },

  shadows: {
    shallow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    normal:
      "0px 0px 1px rgba(102, 102, 102, 0.5), 0px 1px 2px rgba(102, 102, 102, 0.25)",
    deep: "0px 0px 1px rgba(102, 102, 102, 0.5), 0px 2px 2px #DDDDDD",
    inset: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)"
  }
};

// decisions can be encoded using aliases

theme.colors.brand = theme.colors.pinks;
theme.colors.primary = theme.colors.brand;
theme.colors.accent = theme.colors.blues;
theme.colors.success = theme.colors.greens;

theme.colors.text = {
  primary: theme.colors.grays[800],
  primaryLight: theme.colors.grays[700],
  secondary: theme.colors.grays[600],
  subtle: theme.colors.grays[500],
  link: theme.colors.blues[500]
};

// info bit is weird, not gonna lie
theme.colors.info = {
  500: theme.colors.grays[300]
};
theme.colors.borderInfo = theme.colors.grays[400];

theme.fontSizes.heading1 = theme.fontSizes[8];
theme.fontSizes.heading2 = theme.fontSizes[7];
theme.fontSizes.heading3 = theme.fontSizes[6];
theme.fontSizes.heading4 = theme.fontSizes[1];

theme.fontSizes.body = theme.fontSizes[3];
theme.fontSizes.bodySmall = theme.fontSizes[2];
theme.fontSizes.caption = theme.fontSizes[1];

theme.sizes = {
  avatar: {
    xsmall: "16px",
    small: "30px",
    medium: "48px",
    large: "80px",
    xlarge: "100px"
  },
  button: {
    xsmall: "24px",
    small: "32px",
    medium: "40px",
    large: "48px"
  },
  icon: "11px"
};

export default theme;
