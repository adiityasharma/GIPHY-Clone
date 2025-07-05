import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="bg-gradient-to-tl from-gray-900 to-slate-800 w-full h-screen text-white">
      <div className="container p-3 lg:px-6 lg:py-4 mx-auto max-w-280">
        <Header/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
