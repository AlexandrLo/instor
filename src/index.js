import React from "react";
import ReactDOM from "react-dom";

import "focus-visible/dist/focus-visible";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import ResizeObserver from "resize-observer-polyfill/dist/ResizeObserver.global";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { customLocalStorageManager } from "utils/customLocalStorageManager";
import theme from "theme";
import { persistor, store } from "store";

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <ChakraProvider
            theme={theme}
            colorModeManager={customLocalStorageManager}
          >
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <HashRouter>
              <App />
            </HashRouter>
          </ChakraProvider>
        </HelmetProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
