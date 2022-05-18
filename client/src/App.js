import React from 'react';
import { GlobalStyle } from './styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themestyles'

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        Hello
      </ThemeProvider>
    </>
  );
}

export default App;
