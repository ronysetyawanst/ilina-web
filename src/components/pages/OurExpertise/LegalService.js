"use client";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export function LegalService({ legalServiceItems, dict }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setHoveredIndex(index === hoveredIndex ? null : index);
  };

  const handleTouchStart = (index) => {
    setHoveredIndex(index);
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      !event.target.closest(".legal-service-item")
    ) {
      setHoveredIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section ref={containerRef} className="mb-10 mx-4 md:mx-28 h-auto relative">
      {/* Title */}
      <h1
        className="text-2xl font-balham text-[#927034]"
        onClick={() => setHoveredIndex(null)}
      >
        {dict["legal-service"]}
      </h1>
      {/* Description */}
      <div
        className="mt-7 font-myanmar text-base text-[#231F20]"
        onClick={() => setHoveredIndex(null)}
      >
        {dict["legal-service-description"]}
      </div>
      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 h-auto relative"
        style={{ zIndex: 1 }}
      >
        {legalServiceItems.map((item, index) => (
          <LegalServiceItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            onTouchStart={() => handleTouchStart(index)}
          />
        ))}
        {hoveredIndex === 0 && (
          <div className="bg-[#927034] p-4 md:p-10 justify-center z-10 flex-col text-2xl font-balham text-white mt-4 h-full w-full md:w-[66%] flex absolute bottom-0 right-0 opacity-1 animate-fade-in">
            <div className="text-2xl font-balham text-white flex mb-5">
              {legalServiceItems[0].title}
            </div>
            <div className="text-base font-myanmar text-white flex mb-4 text-justify">
              {legalServiceItems[0].description}
            </div>
            <div className="text-base font-myanmar text-white flex flex-col ml-4">
              {legalServiceItems[0].listItems.map((item, idx) => (
                <div key={idx} className="flex">
                  <span className="mr-2">{`${idx + 1}.`}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {hoveredIndex === 2 && (
          <div className="bg-[#927034] p-4 md:p-10 justify-center z-10 flex-col text-2xl font-balham text-white mt-4 h-full w-full md:w-[66%] flex absolute bottom-0 left-0 opacity-1 animate-fade-in">
            <div className="text-2xl font-balham text-white flex mb-5">
              {legalServiceItems[2].title}
            </div>
            <div className="text-base font-myanmar text-white flex mb-4 text-justify">
              {legalServiceItems[2].description}
            </div>
            <div className="text-base font-myanmar text-white flex flex-col ml-4">
              {legalServiceItems[2].listItems.map((item, idx) => (
                <div key={idx} className="flex">
                  <span className="mr-2">{`${idx + 1}.`}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {hoveredIndex === 1 && (
          <div className="bg-[#927034] p-4 md:p-10 justify-center z-10 flex-col text-2xl font-balham text-white mt-4 h-full w-full md:w-[33%] flex absolute bottom-0 right-0 opacity-1 animate-fade-in">
            <div className="text-2xl font-balham text-white flex mb-5 uppercase">
              {legalServiceItems[1].title}
            </div>
            <div className="text-base font-myanmar text-white flex mb-4 text-justify">
              {legalServiceItems[1].description}
            </div>
            <div className="text-base font-myanmar text-white flex flex-col ml-4">
              {legalServiceItems[1].listItems.map((item, idx) => (
                <div key={idx} className="flex">
                  <span className="mr-2">{`${idx + 1}.`}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

LegalService.propTypes = {
  legalServiceItems: PropTypes.array.isRequired,
  dict: PropTypes.object.isRequired,
};

function LegalServiceItem({ title, image, onMouseEnter, onMouseLeave, onClick, onTouchStart }) {
  return (
    <div
      className="relative h-[300px] md:h-[600px] flex items-center justify-center bg-cover transition-all duration-300 legal-service-item"
      style={{ backgroundImage: `url('${image}')` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onTouchStart={onTouchStart}
    >
      <h2 className={`text-xl font-balham text-white text-center uppercase}`}>
        {title}
      </h2>
    </div>
  );
}

LegalServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
};
