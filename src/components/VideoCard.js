import React from "react";

const VideoCard = ({ info }) => {
    if(!info){
        return <div>Loading:</div>;
    }
  console.log("info", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" m-2 shadow-lg w-56 rounded-lg">
      <img className="rounded" alt="thumbnails" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
