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
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
