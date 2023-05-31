import React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
function ChannelCard({ chanel }) {
  const {
    channelId,
    channelTitle,
    description,
    publishTime,
    thumbnails,
    title,
  } = chanel.snippet;
  return (
    <div className="text-white w-full bg-[#161515] p-5 my-3  mx-10 rounded-xl">
      <div className="flex no-wrap justify-between items-center">
        <div className="flex items-center justify-center">
          <img
            src={thumbnails?.high?.url}
            class=" max-w-[150px]  min-w-[250px] rounded-[50%]"
          />
        </div>
        {/* Descrption Section */}
        <div className="max-w-[400px]">
          <h1 class="text-bold text-2xl mt-2">
            <Link to={`chanels/${channelId}`}>{title}</Link>
          </h1>
          <h5 class="text-bold text-md mt-2">{description}</h5>
          <p class="text-bold mt-5">{publishTime}</p>
        </div>

        <div class="md:block hidden">
          <Button
            variant="text"
            sx={{ color: "white", px: "30px" }}
            startIcon={<MdNotificationsNone />}
          >
            subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChannelCard;
