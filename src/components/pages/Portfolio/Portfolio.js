import React from "react";
import { getDictionary } from "../../../app/dictionaries";
import PropTypes from "prop-types";

export default function Portfolio({ dict }) {
  const portfolioItems = [
    {
      image: "/images/img-portfolio-1.jpg",
    },
    {
      image: "/images/img-portfolio-2.jpg",
    },
    {
      image: "/images/img-portfolio-3.jpg",
    },
    {
      image: "/images/img-portfolio-4.jpg",
    },
    {
      image: "/images/img-portfolio-5.jpg",
    },
    {
      image: "/images/img-portfolio-6.jpg",
    },
    {
      image: "/images/img-portfolio-7.jpg",
    },
    {
      image: "/images/img-portfolio-8.jpg",
    },
    {
      image: "/images/img-portfolio-9.jpg",
    },
    {
      image: "/images/img-portfolio-10.jpg",
    },
    {
      image: "/images/img-portfolio-11.jpg",
    }
  ];

  return (
    <section className="justify-center items-center sm:px-4 py-8 md:px-20 md:py-24 lg:px-44 lg:py-36">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-balham text-[#927034] uppercase text-center">
        {dict.portfolio_title}
      </h1>
      {/* Portfolio Items */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mt-8 p-2 md:p-4 justify-center items-start">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} image={item.image} />
        ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  dict: PropTypes.object.isRequired,
};

function PortfolioItem({ image }) {
  return (
    <div className="flex-shrink-0 h-24 md:h-32 overflow-hidden">
      <img
        className="h-full w-auto sm:w-auto object-contain"
        src={image}
        alt="Portfolio Item"
      />
    </div>
  );
}

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
};