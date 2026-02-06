import { createTheme, MantineColorsTuple } from '@mantine/core';

const olive: MantineColorsTuple = [
    '#f4f7f2',
    '#e9ece6',
    '#d5dbce',
    '#bfcab5',
    '#adbb9f',
    '#a1b291',
    '#9bad8a',
    '#889874',
    '#798765',
    '#687553'
];

export const theme = createTheme({
    colors: {
        olive,
    },
    primaryColor: 'olive',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
});
