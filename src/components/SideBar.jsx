import { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utlis/constants";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import { useNavigate } from "react-router-dom";
function SideBar({ setSearch, selectCategory, setSelectCategory, setLoading }) {
  const navigate = useNavigate();
  const HandelChangeMenuItem = (name) => {
    setSelectCategory(name);
    navigate("/search/" + name);
    setLoading(true);
  };
  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: "row", sm: "column" },
        }}
      >
        {categories.map((el) => (
          <div key={`${el.icon}_${el.name}`} className="mt-2">
            <button
              onClick={() => HandelChangeMenuItem(el.name)}
              className={`text-white flex gap-3 font-bolder  p-2 rounded-[5px] w-full  ${
                el.name === selectCategory ? "bg-[#fc1503]" : "bg-[#e3e3e3e]"
              } 
            hover:bg-[#fc1503] mx-2  transition-all  transition-ease
            `}
            >
              <span>
                {" "}
                <el.icon
                  size="25"
                  color={`${el.name === selectCategory ? "white" : "#fc1503"}`}
                  opacity={el.name === selectCategory ? 1 : 0.5}
                />
              </span>
              <span
                className={`${el.name === selectCategory ? "font-bold" : ""} `}
              >
                {" "}
                {el.name}
              </span>
            </button>
          </div>
        ))}
      </Stack>
    </>
  );
}

export default SideBar;
