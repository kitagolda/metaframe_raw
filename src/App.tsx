import { AppRoutes } from "app-routes";
import { BrowserRouter, Routes } from "react-router-dom";

import "react-circular-progressbar/dist/styles.css";
import "styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{AppRoutes}</Routes>
    </BrowserRouter>
  );
};

export default App;
