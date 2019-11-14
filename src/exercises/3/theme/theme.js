/*
  This theme file follows System UI Theme Specification
  https://system-ui.com/theme/
*/

// part 1: variables are nested key:value pairs

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
    blues: {},
    pinks: {}
  }
};

// part 2: decisions can be encoded using aliases

theme.colors.brand = theme.colors.pink;

export default theme;
