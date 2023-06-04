import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    color:${({theme})=>theme.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h2{
    color:${({theme})=>theme.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h3{
    color:${({theme})=>theme.colors.text_heading};
    font-size: 4rem;
    font-weight: 700;
}
h4{
    color:${({theme})=>theme.colors.heading};
    font-size: 3.2rem;
    font-weight: 700;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.container{
    max-width: 190rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

`
export default GlobalStyle;