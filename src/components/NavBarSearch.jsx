import React from "react";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
function NavBarSearch() {
  const [Value, setValue] = useState("");
  return (
    <Paper
      component="form"
      sx={{
        //    border: "1px solid #eee",
        borderRadius: "20px",
        width: { md: "400px" },
        mr: { sm: 5 },
      }}
    >
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={Value}
            className="border-none  h-[100%]  w-[100%] focus:border-none "
          />
        </div>
        <IconButton>
          <MdOutlineSearch />
        </IconButton>
      </div>
    </Paper>
  );
}

export default NavBarSearch;
