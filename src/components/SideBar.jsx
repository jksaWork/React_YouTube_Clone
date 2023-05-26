import { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utlis/constants";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
function SideBar() {
  const [selectCategory, setSelectCategory] = useState("New");

  const HandelChangeMenuItem = (name) => {
    setSelectCategory(name);
  };
  return (
    <>
      <Stack
        //  direction="col"
        sx={{
          flexDirection: { md: "col" },
          overflow: "auto",
          height: { sx: "auto", sm: "94%" },
          width: { sx: "auto", sm: "150%" },
        }}
      >
        {categories.map((el) => (
          <div key={`${el.icon}_${el.name}`} className="mt-2">
            <button
              onClick={() => HandelChangeMenuItem(el.name)}
              className={`text-white flex gap-3 font-bolder  p-2 rounded-[5px] w-full  ${
                el.name === selectCategory ? "bg-[#fc1503]" : "bg-[#e3e3e3e]"
              } 
            hover:bg-[#fc1503]  transition-all  transition-ease
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
              <span class={`${el.name === selectCategory ? "font-bold" : ""} `}>
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
