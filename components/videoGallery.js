import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../utils/firebase_data_handler";
import Carousel from 'nuka-carousel';
import style from "../styles/components/videogallery.module.scss";

const VideoGallery = () => {

  const [mobile, setMobile] = useState(false);

  const packarma_videoData = useQuery(
    ["packarma_video"],
    () => {
      return getAllData("packarma_video");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const videoArray = packarma_videoData.data?.data || [];
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(3);

  const handleThumbnailClick = (index) => {
    setSelectedVideoIndex(index);
  };

  const selectedVideo = videoArray[selectedVideoIndex] || {};

  const handleScroll = (direction) => {
    const newIndex = direction === 'up' ? selectedVideoIndex - 1 : selectedVideoIndex + 1;
    const maxVisibleVideos = 3;

    if (newIndex >= 0 && newIndex < videoArray.length) {
      setSelectedVideoIndex(newIndex);

      if (direction === 'down' && newIndex + maxVisibleVideos >= visibleVideos) {
        setVisibleVideos((prevVisible) => prevVisible + 1);
      }

      if (direction === 'up' && newIndex < visibleVideos - 1) {
        setVisibleVideos((prevVisible) => prevVisible - 1);
      }
    }
  };

  useEffect(() => {
    setMobile(window.innerWidth < 768 ? true : false);
  }, []);

  return (
    <div>
      <div className={style.videolistcontainer}>
        <div className={style.gallerycontainer}>
          <div className={style.videoplayer}>
            <iframe src={selectedVideo.url} frameBorder="0" allowFullScreen title="Main Video"></iframe>
          </div>
          {!mobile && (
          <div className={style.videolist}>
            <button className={style.scrollbutton} onClick={() => handleScroll('up')}>▲</button>
            <div className={style.thumbnailcontainer}>
              {videoArray.filter((_, index) => index !== selectedVideoIndex).slice(0, visibleVideos).map((video, index) => (
                <div key={index} className={style.videoitem} onClick={() => handleThumbnailClick(index)}>
                  <iframe src={video.url} frameBorder="0" allowFullScreen style={{ width: "100%", height: "97.5%" }}></iframe>
                </div>
              ))}
            </div>
            <button className={style.scrollbutton} style={{ marginTop: "20px"}} onClick={() => handleScroll('down')}>▼</button>
          </div>
          )}
        </div>
      </div>
      <div className={style.videoinfo}>
        <h3>{selectedVideo.name}</h3>
        <p>{selectedVideo.content}</p>
      </div>
      {/* Updated mobile video list with previous and next buttons */}
      {mobile && (
      <div className={style.mobilevideolist}>
        <button className={style.scrollbutton} onClick={() => handleScroll('up')}>◄</button>
        <div className={style.thumbnailcontainer}>
          {videoArray.filter((_, index) => index !== selectedVideoIndex).slice(0, visibleVideos).map((video, index) => (
            <div key={index} className={style.videoitem} onClick={() => handleThumbnailClick(index)}>
              <iframe src={video.url} frameBorder="0" allowFullScreen ></iframe>
            </div>
          ))}
        </div>
        <button className={style.scrollbutton} onClick={() => handleScroll('down')}>►</button>
      </div>
      )}
    </div>
  );
};

export default VideoGallery;
