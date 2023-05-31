import React, { useEffect, useState } from "react";
import { NavBar, SideBar } from "./";
// import {useParams } from 're'
import { useParams } from "react-router-dom";
import FetchFromApi from "../utlis/FetchFromApi";

function AppLayouts(props) {
  const { searchTrem } = useParams();
  const [selectCategory, setSelectCategory] = useState(searchTrem);
  const [Vedios, setVedios] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setSelectCategory(searchTrem);
    FetchFromApi(`search?part=snippet&q=${searchTrem}`).then((res) => {
      setVedios(res.data.items);
      setLoading(false);
      setSelectCategory(searchTrem);
    });
  }, [searchTrem]);

  return (
    <div>
      <NavBar setSearch={props.setSearch} />
      {/* side Bar  */}
      <div className="flex ">
        <div className="w-1/5 h-[92vh] overflow-hidden hover:overflow-auto">
          <SideBar
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            setLoading={setLoading}
          />
        </div>
        <div className="w-4/5 h-[92vh] overflow-hidden hover:overflow-auto">
          {props.children}
        </div>
      </div>

      {/* context Bar  */}
    </div>
  );
}

export default AppLayouts;
