import React, { useState, useEffect } from "react";
import AuthenticatedNav from "./authenticatedNav";
import { Outlet } from "react-router-dom";


const AuthenticatedLayout = ({children}) => {

  return (
    <div className="landing-container">
        <AuthenticatedNav />
      {/* Main Content */}
      <main className="main-content">
       <Outlet/>
       <footer style={{textAlign: "center",
        padding: "10px",
        backgroundColor: "#f1f1f1",
        fontSize: "14px"}}>&copy;2025 ZICOSU. &nbsp; All rights reserved</footer>
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
