import React from "react";
import NavBar from "./NavBar";

function AppLayouts(props) {
  return (
    <div>
      <NavBar setSearch={props.setSearch} />
      {/* side Bar  */}
      {props.children}
      {/* context Bar  */}
    </div>
  );
}

export default AppLayouts;
