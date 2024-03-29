import React from "react";
import TestApp from "./components/testApp/TestApp";
import { ThemeProvider } from "./providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <TestApp />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
