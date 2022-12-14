import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
    box-sizing : border-box;
}
body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    background:rgb(140,150,160);
    color:#black;
    padding:0;
    margin:0;
    transition:all 0.25s linear;
};
.canvas{
    align-item:center;
    display:grid;
    gap:0.5 rem;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    min-hight:100 vh;
    padding:1rem;
    width:100vw;
}
.type-box{
    display:block;
    max-width:1000px;
    height:140px;
    overflow:hidden;
    margin-left:auto;
    margin-right:auto;
    position:relative;
}
.words{
    font-size:28px;
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    width:100%;
}
.word{
    margin:5px 5px;
    padding-right:2px;
    scroll-margin:5px;
}
.hidden-input{
   opacity:0;
}
.char.correct{
    color: green;
}
.char.incorrect{
    color:red;
}
.current{
    border-left:2px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;

    @keyframes blinking{
        0%{border-left-color:#fff;}
        25%{border-left-color:black;}
        50%{border-left-color:#fff;}
        75%{border-left-color:black;}
        100%{border-left-color:#fff;}
    }
}
.right{
    border-right:2px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;

    @keyframes blinkingRight{
        0%{border-right-color:#fff;}
        25%{border-right-color:black;}
        50%{border-right-color:#fff;}
        75%{border-right-color:black;}
        100%{border-right-color:#fff;}
    }
}
h3{
    margin-left:auto;
    margin-right:auto;
}
.upper-menu{
    displ
}





`
