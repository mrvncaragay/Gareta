import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Main app component
import GaretaApp from './GaretaApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GaretaApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
