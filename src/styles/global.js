import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --gray: rgb(233, 230, 230);
}

html {
  background-color: #e21212;
}

* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  box-sizing: border-box;
}
`