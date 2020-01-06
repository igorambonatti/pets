import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline: 0
  }

  html, body, #root {
  min-height: 100%;
  height: 100% auto;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }
  a{
    text-decoration:none;
    font: 'Roboto', sans-serif
  }
 ul{
   list-style:none;
 }
 button{
   cursor:pointer;
 }
`;
