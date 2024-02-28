import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../utils/firebase_data_handler";
import Carousel from 'nuka-carousel';

const VideoGallery = () => {
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
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);//0 for selected to the first video
  const [visibleVideos, setVisibleVideos] = useState(3);

  const handleThumbnailClick = (index) => {
    console.log("Thumbnail clicked:", index);
    setSelectedVideoIndex(index);
  };

  const selectedVideo = videoArray[selectedVideoIndex] || {};

  const handleScroll = (direction) => {
    console.log(direction);
    const newIndex = direction === 'up' ? selectedVideoIndex - 1 : selectedVideoIndex + 1;
    console.log(newIndex);
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

  // useEffect(() => {
  //   // Simulate a click on the up scroll button on load
  //   handleScroll('up');
  // }, []);

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem", display: "flex", flexDirection: "column" }}>
      {/* Container for Video and List (and possibly video info for larger screens) */}
      <div className="video-and-list-container">
        <div className="gallery-container">
          {/* Video Player */}
          <div className="video-player">
            <iframe src={selectedVideo.url} frameBorder="0" allowFullScreen title="Main Video"></iframe>
          </div>

          {/* Video List - Hidden in Mobile View */}
          <div className="video-list">
            <button className="scroll-button" onClick={() => handleScroll('up')}>▲</button>
            <div className="thumbnail-container">
              {videoArray.filter((_, index) => index !== selectedVideoIndex).slice(0, visibleVideos).map((video, index) => (
                <div key={index} className="video-item" onClick={() => handleThumbnailClick(index)}>
                  <iframe src={video.url} frameBorder="0" allowFullScreen style={{ width: "100%", height: "97.5%" }}></iframe>
                </div>
              ))}
            </div>
            <button className="scroll-button" style={{ marginTop: "20px"}} onClick={() => handleScroll('down')}>▼</button>
          </div>
        </div>
      </div>

      {/* Video Information */}
      <div className="video-info">
        <h3 className="video-title">{selectedVideo.name}</h3>
        <p className="video-description">{selectedVideo.content}</p>
      </div>

      {/* Thumbnail Carousel for Mobile Devices - Hidden in Desktop View */}
      <div className='content'>
        <Carousel
          slidesToShow={3}
          defaultControlsConfig={{
            nextButtonText: ">",
            prevButtonText: "<",
            nextButtonProps: { "aria-label": "Next" },
            prevButtonProps: { "aria-label": "Previous" },
            nextButtonStyle: {
              backgroundColor: "#87BE42",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              marginRight: "-10px",
            },
            prevButtonStyle: {
              backgroundColor: "#87BE42",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
            pagingDotsStyle: {
              display: "none",
            },
          }}
        >
          {videoArray.map((video, index) => (
            <div key={index} style={{ paddingLeft: "8vw", paddingRight: "2vw" }}>
              <iframe
                src={video.url}
                width="100%"
                height="90vw"
                style={{ backgroundColor: 'black', maxWidth: '100%', cursor: 'pointer' }}
                frameBorder="0"
                allowFullScreen
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx>{`
        .video-and-list-container {
          display: flex;
          flex-direction: column;
        }

        .gallery-container {
          display: flex;
          align-items: center;
        }

        .video-player {
          flex: 1;
          margin-right: 40px;
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
          width: 784.88px;
          height: 540.69px;
        }

        .content {
          display: none;
        }

        .video-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          //align-items: center;
          align-items: flex-start;
          width: 140px;
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
          height: 133.82px;
          width: 133.82px;
          background-color: #000000;
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

        @media (min-width: 768px) and (max-width: 1024px) {
          .video-player iframe {
            width: 500px;
            height: 333px;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            flex-direction: column;
          }

          .video-player {
            margin-right: 0;
            margin-bottom: 20px;
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

          .content {
            height: 20vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoGallery;
