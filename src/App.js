import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Externals
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
          <PersistGate loading={null} persistor={persistor}>
            <GaretaApp />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
