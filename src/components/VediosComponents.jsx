import React from "react";
import { Triangle } from "react-loader-spinner";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
function VediosComponents({ videos, Loading }) {
  console.log(videos, Loading, "veriosns");
  return Loading ? (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <Triangle
        height="180"
        width="180"
        color="#fc1503"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="w-full ">
      <Stack gap={2} flexWrap="wrap" justifyContent={"center"} direction="row">
        {videos.map((item) => (
          <VideoCard vedio={item} key={item} />
        ))}
      </Stack>
    </div>
  );
}

export default VediosComponents;
