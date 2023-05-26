import React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utlis/constants";
import FetchFromApi from "../utlis/FetchFromApi";

function VideoCard({ vedio }) {
  //   console.log("res");
  return (
    <div class="text-white min-w-[150px] max-w-[320px]">
      {" "}
      <ActionAreaCard vedio={vedio} />{" "}
    </div>
  );
}

export default VideoCard;

export function ActionAreaCard({ vedio }) {
  //   console.log(vedio);
  const [ChanelImage, setChanelImage] = useState("");
  const getIamge = (chanel_id) => {
    FetchFromApi(`channels?part=snippet,statistics&id=${chanel_id}`).then(
      (res) => {
        console.log(res);
        let banner_image =
          res.data.items[0].brandingSettings.image.bannerExternalUrl;
        console.log(banner_image, "chanel_image");
        setChanelImage(banner_image);
        console.log(ChanelImage, "affter Set");
      }
    );
  };
  const {
    channelId,
    channelTitle,
    description,
    publishTime,
    title,
    thumbnails,
  } = vedio.snippet;
  return (
    <Card variant="dark" sx={{ background: "#161515" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="100"
          sx={{
            height: 170,
          }}
          image={thumbnails?.high?.url}
          alt="green iguana"
        />
        <CardContent>
          <div className="flex">
            <div className="w-[50px]  mr-3">
              {getIamge(channelId)}
              <img
                src={ChanelImage}
                className="w-[90%] h-[90%] rounded-full"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <Typography gutterBottom component="div" color="white">
                <div className="text-ellipsis line-clamp-2 min-h-[50px]">
                  {title}
                </div>
              </Typography>
            </div>
          </div>

          <Typography variant="body2" color="gray">
            <div className="text-ellipsis line-clamp-2"> {description}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}