import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./AppProvider";
import AppRoutes from "./router";
import Layout from "./components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyles from "./assets/styles/globalStyles";

const App = () => (
  <AppProvider>
    <GlobalStyles />
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  </AppProvider>
);

export default App;
