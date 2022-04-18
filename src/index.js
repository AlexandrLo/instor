import React from "react";
import ReactDOM from "react-dom";

import "focus-visible/dist/focus-visible";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { customLocalStorageManager } from "customLocalStorageManager";
import theme from "theme";
import { persistor, store } from "app/store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider
          theme={theme}
          colorModeManager={customLocalStorageManager}
        >
          <HashRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </HashRouter>
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
