import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        line-height: 1;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-size-adjust: none;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, dfn, del, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0px;
        padding: 0px;
        border: 0px;
        font: inherit;
        vertical-align: baseline;
    }
    
`

export default GlobalStyle
