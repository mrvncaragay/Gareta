import React from 'react';

// Main app component
import GaretaApp from './GaretaApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GaretaApp />
    </ThemeProvider>
  );
}

export default App;
