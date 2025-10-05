import React from 'react';
import Routes from './Routes';
import ErrorBoundary from 'components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from 'components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ScrollToTop />
        <Routes />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
