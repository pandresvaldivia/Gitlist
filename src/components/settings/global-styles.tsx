import { createGlobalStyle } from 'styled-components';
import { FONTS } from './fonts';
import { COLORS } from './colors';
import { TYPOGRAPHY } from './tipography';

const GlobalStyleStyled = createGlobalStyle`
    ${FONTS}
    ${TYPOGRAPHY}
    ${COLORS}

    body {
        background: var(--bg);
        color: var(--grey);
        font: var(--body1-regular);
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyleStyled;
