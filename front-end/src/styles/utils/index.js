export const setThemeFor = (elementTheme) => (props) => {
  const theme = Object.keys(elementTheme).find(
    (prop) => Object.keys(props).includes(prop),
  );
  return theme ? elementTheme[theme] : null;
};

export const setIfActive = (activeStyle) => ({ active }) => active && activeStyle;

export const getThemeColor = (colorName) => (props) => props.theme.colors[colorName];
