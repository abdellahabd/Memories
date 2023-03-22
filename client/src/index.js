import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./Store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App></App>
    </ThemeProvider>
  </Provider>
);
