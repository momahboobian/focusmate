import React, { useState } from "react";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import NavBar from "./components/NavBar";

import "./App.css";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app">
      <Header />
      <NavBar toggleSidebar={toggleSidebar} />
      <Grid container className="main">
        {showSidebar && (
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={showSidebar ? 9 : 12}>
          <Calendar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
