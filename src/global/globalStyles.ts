import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GowunDodumRegular from "@/fonts/GowunDodumRegular.ttf";

const GlobalStyles = createGlobalStyle`
${reset}

@font-face {
  font-family: 'GowunDodumRegular';
  src: local('GowunDodumRegular');
  font-style: normal;
  src: url(${GowunDodumRegular}) format('truetype');
}

body {
  width: 100wh;
  height: 100vh;
  background-color: var(--color-pink);
  font-family: GowunDodumRegular;
  font-size: 1rem;
}

::selection {
		background-color: var(--color-gray);
		color: var(--color-yellow);
	}

:root {
  --color-black: #3B3B3B;
  --color-gray: #575757;
  --color-pink: #F5C2C9;
  --color-yellow: #F7F1B3;
  --color-white: #FFFFFF;
}

button {
  background-color: transparent;
  outline: none;
  border: none;
  font-family: GowunDodumRegular;
}
`;

export default GlobalStyles;
