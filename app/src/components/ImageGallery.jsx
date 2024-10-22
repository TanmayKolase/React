import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/ee/08/5b/ee085bd5be01c3ef7d0e4ee350a23cbf.jpg",
    },
    {
      id: 2,
      url: "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg?w=400&h=300&c=crop",
    },
    {
      id: 3,
      url: "https://media.gettyimages.com/id/1434940872/photo/brisbane-australia-virat-kohli-poses-during-the-india-icc-mens-t20-cricket-world-cup-2022.jpg?s=612x612&w=gi&k=20&c=UDVUl0RHd8ChFAY5-LngpC-YBWccoYMEzVLsxZAGHT4=",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <img
        src={images[currentImageIndex].url}
        alt="Gallery"
        style={{ width: "250px", height: "250px" }}
      />{" "}
      <br />
      <button onClick={handlePrevious}>Previous</button>
      <br />
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default ImageGallery;
