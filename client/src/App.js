import React from 'react';
import { GlobalStyle } from './styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themestyles'
import Header from './components/utils/Header';
import Footer from './components/utils/Footer';
import Hero from './components/pages/Hero';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Header/>
        <Hero/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
