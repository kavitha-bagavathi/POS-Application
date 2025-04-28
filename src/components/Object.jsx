
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Object.css";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 1", Item: "black coffee" },
  { id: 2, src: "https://images.unsplash.com/photo-1523942839745-7848c839b661", alt: "Coffee 2", Item: "black Tea" },
  { id: 3, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", alt: "Coffee 3", Item: "Green tea" },
  { id: 4, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 4", Item: "Coffee" },
  { id: 5, src: "https://images.unsplash.com/photo-1498804103079-a6351b050096", alt: "Coffee 5", Item: "Tea" },
  { id: 6, src: "https://images.unsplash.com/photo-1497636577773-f1231844b336", alt: "Coffee 6", Item: "chinese Tea" },
  { id: 7, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348", alt: "Coffee 7", Item: "Iced coffee black" },
  { id: 8, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 8", Item: "soya milk" },
  { id: 9, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 9", Item: "Iced coffee" },
  { id: 10, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf", alt: "Coffee 10", Item: "Iced tea" },
  { id: 11, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 11", Item: "Grass Jelly" },
  { id: 12, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 12", Item: "Coffee c" },
  { id: 13, src: "https://images.unsplash.com/photo-1523942839745-7848c839b661", alt: "Coffee 13", Item: "Tea c" },
  { id: 14, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", alt: "Coffee 14", Item: "Black and white" },
  { id: 15, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 15", Item: "Milo" },
  { id: 16, src: "https://images.unsplash.com/photo-1497636577773-f1231844b336", alt: "Coffee 16", Item: "Iced milo" },
  { id: 17, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348", alt: "Coffee 17", Item: "Water" },
  { id: 18, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 18", Item: "Iced Tea black" },
  { id: 19, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 19", Item: "Iced coffee black" },
  { id: 20, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf", alt: "Coffee 20", Item: "Lemon tea" },
];

const Object = ({ setSelectedItem}) => {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  
  const handleClick = (image) => {
    setSelectedItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === image.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === image.id ? { ...item, Quantity: item.Quantity + 1 } : item
        
        );
      }
      return [...prevItems, { ...image, Quantity: 1 }];
    });
  };


  

  return (
    <div className="row p-0 container-fluid" style={{ height: "370px", width: "100%" }}>
      {images.map((image) => (
        <div key={image.id} className="col-md-3 col-sm-6 col-12 g-1 d-flex p-0 justify-content-center">
          <button
            className="btn p-0 border-0 position-relative"
            style={{ background: "none" }}
            onClick={() => handleClick(image)}
            onMouseEnter={() => setHoveredImageId(image.id)}
            onMouseLeave={() => setHoveredImageId(null)}
          >
            <div className="image-box position-relative">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{
                  filter: hoveredImageId === image.id ? "blur(1px)" : "none",
                  transition: "0.1s ease",
                }}
              />
              {hoveredImageId === image.id && (
                <div
                  className="overlay-text"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255, 182, 193, 0.8)",
                    color: "white",
                    padding: "3px",
                    borderRadius: "5px",
                    fontSize: "10px",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  {image.Item}
                </div>
              )}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Object;


