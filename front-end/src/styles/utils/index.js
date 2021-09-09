export const setThemeFor = (elementTheme) => (props) => {
  const theme = Object.keys(elementTheme).find(
    (prop) => Object.keys(props).includes(prop),
  );
  return theme ? elementTheme[theme] : null;
};

export const setIfActive = (activeStyle) => ({ active }) => active && activeStyle;

export const getThemeColor = (colorName) => (props) => props.theme.colors[colorName];

export const getStatusColor = (props) => {
  const statusColors = {
    Entregue: props.theme.colors.delivered,
    Preparando: props.theme.colors.preparing,
    Pendente: props.theme.colors.pending,
  };
  return statusColors[props.status];
};
