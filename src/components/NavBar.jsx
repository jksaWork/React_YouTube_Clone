import React from "react";
import { Stack } from "@mui/material";
import { logo } from "../utlis/constants";
import { MdAccessibilityNew } from "react-icons/md";
import { NavBarSearch } from "./";
function NavBar() {
  return (
    <div className="flex  flex-col content-center h-[8vh]">
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}> */}
        <img src={logo} alt="logo" className="max-h-[40px]" />
        {/* </Link> */}
        <NavBarSearch />
      </Stack>
    </div>
  );
}

export default NavBar;
