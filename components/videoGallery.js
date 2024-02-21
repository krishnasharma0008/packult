import Link from "next/link";
import { useState } from 'react';
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
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(3);

  const handleThumbnailClick = (index) => {
    console.log("Thumbnail clicked:", index);
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
  

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <div className="gallery-container">
        <div className="video-player">
          <iframe src={selectedVideo.url} frameBorder="0" allowFullScreen title="Main Video"></iframe>
          <div className="video-info">
            <h3 className="video-title">{selectedVideo.name}</h3>
            <p className="video-description">{selectedVideo.content}</p>
          </div>
        </div>
        <div className="video-list">
          <button className="scroll-button" onClick={() => handleScroll('up')}>▲</button>
          <div className="thumbnail-container">
            {videoArray.slice(visibleVideos - 3, visibleVideos).map((video, index) => (
              <div key={index} className="video-item">
                <iframe src={video.url} alt={`Thumbnail ${video.name}`} width={100} height={100} frameBorder="0" allowFullScreen
                 onClick={() => handleThumbnailClick(index + visibleVideos - 3)}></iframe>
              </div>
            ))}
          </div>
          <button className="scroll-button" style={{marginTop:"20px"}} onClick={() => handleScroll('down')}>▼</button>
        </div>
        {/* Thumbnail Carousel for Mobile Devices */}
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
              <div key={index} style={{ paddingLeft: "8vw",paddingRight:"6vw"}}>
                <iframe
                  src={video.url}
                  width="50vw"
                  height="50vw"
                  frameBorder="0"
                  allowFullScreen
                  onClick={() => handleThumbnailClick(index)}       
                  style={{ backgroundColor: 'black' }}         
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          align-items: center;
        }

        .video-player {
          flex: 1;
          //margin-right: 20px;
        }

        .video-info {
          margin-top: 10px; /* Adjust spacing as needed */
        }
        
        .video-title {
          font-size: 1.5rem; /* Example size, adjust based on your design */
          margin-bottom: 0.5rem;
          color: #000; /* Adjust color based on your design */
        }
        
        .video-description {
          font-size: 1rem; /* Example size, adjust based on your design */
          color: #666; /* Lighter text color for the description */
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
          align-items: center;
        }

        .thumbnail-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
          //height: 400px;
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
