import jss from 'jss';
import preset from 'jss-preset-default';
import { create as createInjectSheet } from 'react-jss';

jss.setup(preset());

export default createInjectSheet(jss);

// global variables
export const fontFamily = '"Roboto", sans-serif';
export const fontSize = '16px';

export const primaryColor = '#00bcd4';
export const headerHeight = '120px';
