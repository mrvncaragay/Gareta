import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Externals
import { Provider } from 'react-redux';
import store from './redux/store';

// Main app component
import GaretaApp from './GaretaApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <GaretaApp />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
