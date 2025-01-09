"use client";
import PropTypes from "prop-types";
import React, { useRef } from "react";

export default function ContentCarousel ({ articles, dict }) {
  const contentRefs = useRef([]);

  const scrollLeft = (index) => {
    if (contentRefs.current[index]) {
      contentRefs.current[index].scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = (index) => {
    if (contentRefs.current[index]) {
      contentRefs.current[index].scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="p-2 mt-4 sm:p-4 md:p-6 lg:p-10">
      {articles.map((categoryData, index) => (
        <div key={index} className="mb-8">
          {/* Category Title */}
          <h2 className="text-[#927034] text-2xl font-bold mb-4 px-4 sm:px-12 font-balham">
            {categoryData.category}
          </h2>

          {/* Sliding Container */}
          <div className="w-full flex justify-between items-center">
            <button
              onClick={() => scrollLeft(index)}
              className={`hidden sm:flex flex-shrink-0 bg-[#927034] text-white text-xl rounded-full p-2 w-10 h-10 items-center justify-center mr-3 ${
                categoryData.articles.length <= 3 ? "invisible" : ""
              }`}
            >
              &#8249;
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="flex flex-1 overflow-x-auto scroll-smooth scrollbar-hide space-x-4"
            >
              {categoryData.articles.map((article, idx) => (
                <div
                  key={idx}
                  className="w-[calc(90%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] flex-shrink-0 bg-white"
                >
                  {/* Image */}
                  <img
                    src={`/images/${article.image}`}
                    alt={article.title}
                    className="w-full h-48 object-cover font-balham"
                  />
                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xl text-[#927034] font-medium font-balham">
                      {categoryData.category}
                    </p>
                    <h3 className="text-xl font-medium text-[#231f20] font-balham">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#231f20] mt-2">
                      {dict["by"]} {article.author} | {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollRight(index)}
              className={`hidden sm:flex flex-shrink-0 bg-[#927034] text-white rounded-full p-2 w-10 h-10 items-center justify-center ml-3 ${
                categoryData.articles.length <= 3 ? "invisible" : ""
              }`}
            >
              &#8250;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

ContentCarousel.propTypes = {
  articles: PropTypes.array.isRequired,
  dict: PropTypes.object.isRequired
};