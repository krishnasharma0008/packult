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
        <h3 className={style.videotitle}>{selectedVideo.name}</h3>
        <p className={style.videodescription}>{selectedVideo.content}</p>
      </div>
      {/* Updated mobile video list with previous and next buttons */}
      {mobile && (
      <div className="mobile-video-list">
        <button className="scroll-button" onClick={() => handleScroll('up')}>◄</button>
        <div className="thumbnail-container">
          {videoArray.filter((_, index) => index !== selectedVideoIndex).slice(0, visibleVideos).map((video, index) => (
            <div key={index} className={style.videoitem} onClick={() => handleThumbnailClick(index)}>
              <iframe src={video.url} frameBorder="0" allowFullScreen style={{ width: "100%", height: "97.5%" }}></iframe>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={() => handleScroll('down')}>►</button>
      </div>
      )}
      <style jsx>{`
        .video-and-list-container {
          display: flex;
          align-items: center;
        }

        .gallery-container {
          display: flex;
          align-items: center;
        }

        .video-player {
          //flex: 1;
          margin-right: 90px; /* Adjust margin for spacing */
          width: 80%; /* Updated width */
        }

        .video-info {
          margin-top: 10px;
        }

        .video-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #000;
        }

        .video-description {
          font-size: 1rem;
          color: #666;
        }

        .video-player iframe {
          width: 100%;
          height: max-content;
        }
        
        .video-list {
          //flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 10%; /* Updated width */
        }

        .thumbnail-container {
          display: flex;
          flex-direction: column;
          //align-items: center;
          align-items: flex-start; /* Align to the left */
          overflow-y: auto;  
          width: 140px; /* Adjusted width */
          height:auto;        
        }

        .video-item {
          margin-top: 20px;
          cursor: pointer;
          //height: 133.82px;
          width: 8.85vw;
          height:auto;
          //background-color: #000000;
        }

        .scroll-button {
          padding: 5px;
          cursor: pointer;
          background-color: #87BE42;
          color: #fff;
          border: none;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          margin: 0 auto; /* Center the button */
          margin-left: 50px;
        }

        .scroll-button:hover {
          background-color: #87BE42;
        }

        .mobile-video-list {
          display: none;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .video-player iframe {
            width: 500px;
            height: 333px;
          }
        }
        @media (max-width: 767px) {
          .gallery-container {
            flex-direction: column;
          }

          .video-player {
            margin-right: 0;
            //margin-bottom: 20px;
            width: 100%;
            height: auto;
          }

          .video-player iframe {
            width: 100%;
            height: auto;
          }

          .video-title {
            font-family: 'Visby Bold';
            font-size: 4vw;
            margin-bottom: 0.5rem;
            color: #000;
          }

          .video-description {
            font-size: 3vw;
            font-family: 'Visby Regular';
            color: #666;
          }

          .video-list {
            display: none;
          }

          .mobile-video-list {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .mobile-video-list .thumbnail-container {
            display: flex;
            overflow-x: auto;
            margin: 10px 0;
          }

          .mobile-video-list .scroll-button {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoGallery;
