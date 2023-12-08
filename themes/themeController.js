// themes/themeController.js
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

let currentTheme = lightTheme;

export const setTheme = (theme) => {
    currentTheme = theme;
};

export const getTheme = () => {
    return currentTheme;
};