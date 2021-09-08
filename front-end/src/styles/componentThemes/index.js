import { css } from 'styled-components';
import { getThemeColor } from '../utils';

export const buttonThemes = {
  primary: css`
    background-color: ${getThemeColor('primary')};
    color: ${getThemeColor('light')};
  `,
  secondary: css`
    background-color: ${getThemeColor('secondary')};
    color: ${getThemeColor('light')};
  `,
  tertiary: css`
    background-color: none;
    border: 2px solid ${getThemeColor('primary')};
    color: ${getThemeColor('primary')};
  `,
};

export const navLinkThemes = {
  active: css`
    background-color: ${getThemeColor('secondary')};
    color: ${getThemeColor('dark')};
  `,
};
