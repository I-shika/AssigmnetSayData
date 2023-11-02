import React from "react";
import Sidebarcontainer from "../../components/sidebar";
import Dashboard from "../../components/dashboard";
export default function Home() {
  return ( 
     <div className="MainPage">
     <Sidebarcontainer/>
      <Dashboard/>
     </div>
  )
}
