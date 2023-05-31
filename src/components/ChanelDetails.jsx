import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FetchFromApi from "../utlis/FetchFromApi";
import { CardActionArea, Button } from "@mui/material";
import { MdNotificationsNone } from "react-icons/md";
import { Triangle } from "react-loader-spinner";
import VediosComponents from "./VediosComponents";
function ChanelDetails() {
  const { id } = useParams();
  //   console.log(id);
  const [Loading, setLoading] = useState(true);
  const [Vedios, setVedios] = useState({});
  const [Channel, setChannel] = useState({});
  console.log(Vedios, Channel, "--------------chanel ------------");

  useEffect(() => {
    FetchFromApi(`channels?id=${id}&part=snippet`).then((res) => {
      setChannel(res.data.items[0]);
      //  console.log(res.data.items);
      //  setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&channelId=${id}`).then((res) => {
      setVedios(res.data.items);
      //  console.log(res.data.items);
      setLoading(false);
    });
  }, [id]);

  return Loading ? (
    <div className="w-full h-[100vh] flex justify-center items-center">
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
    <div class="flex flex-col">
      <div className="header banner_image h-[300px] w-full overflow-hidden">
        <img
          src={Channel?.brandingSettings?.image?.bannerExternalUrl}
          className="min-w-[100%] object-cover"
        />
        {/* Image */}
      </div>
      <div className="text-white w-full bg-[#161515] p-5   rounded-xl">
        <div className="flex no-wrap justify-between items-center">
          <div className="flex items-center justify-center">
            <img
              src={Channel.snippet.thumbnails?.high?.url}
              class=" max-w-[150px]  min-w-[150px] mx-3  rounded-full"
            />
            <div className="max-w-[400px] mx-4">
              <h1 class="text-bold text-2xl mt-2">
                <Link to={`chanels/${Channel.id.channelId}`}>
                  {Channel.snippet.title}
                </Link>
              </h1>
              <h5 class="text-bold text-md mt-2">
                {Channel.snippet.description}
              </h5>
              <p class="text-bold mt-5">{Channel.snippet.publishTime}</p>
            </div>
          </div>
          {/* Descrption Section */}

          <div class="md:block hidden">
            <Button
              variant="text"
              sx={{ color: "white", px: "30px" }}
              startIcon={<MdNotificationsNone />}
            >
              subscribe
            </Button>

            <Button
              variant="contained"
              sx={{ color: "white", px: "30px" }}
              //     startIcon={<MdNotificationsNone />}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-3 w-5/6 mx-auto">
        <VediosComponents videos={Vedios} Loading={Loading} />
      </div>
    </div>
  );
}

export default ChanelDetails;
