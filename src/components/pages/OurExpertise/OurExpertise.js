import React from "react";
import "./styles.css";
import { getDictionary } from "../../../app/dictionaries";
import PropTypes from "prop-types";
import { LegalService } from "./LegalService";

export default function OurExpertise({ dict }) {
  const expertiseItems = [
    {
      title: dict.corporate,
      description: dict.corporate_description,
      image: "/images/img-corporate-bg.png",
    },
    {
      title: dict.employment,
      description: dict.employment_description,
      image: "/images/img-employment-bg.png",
    },
    {
      title: dict.defamation,
      description: dict.defamation_description,
      image: "/images/img-defamation-bg.png",
    },
    {
      title: dict.fraud,
      description: dict.fraud_description,
      image: "/images/img-fraud-bg.png",
    },
    {
      title: dict.banking,
      description: dict.banking_description,
      image: "/images/img-banking-bg.png",
    },
    {
      title: dict.industrial_dispute,
      description: dict.industrial_dispute_description,
      image: "/images/img-dispute-bg.png",
    },
  ];

  const legalServiceItems = [
    {
      title: dict.litigation_lawyer,
      description: dict.litigation_lawyer_description,
      listItems: dict.litigation_lawyer_listItems,
      image: "/images/img-litigation-lawyer-bg.png",
    },
    {
      title: dict.non_litigation_lawyer,
      description: dict.non_litigation_lawyer_description,
      listItems: dict.non_litigation_lawyer_listItems,
      image: "/images/img-non-litigation-lawyer-bg.png",
    },
    {
      title: dict.legal_corporate,
      description: dict.legal_corporate_description,
      listItems: dict.legal_corporate_listItems,
      image: "/images/img-corporate-lawyer-bg.png",
    },
  ];
  return (
    <section className="my-3 pt-10">
      <OurExpertises expertiseItems={expertiseItems} dict={dict} />
      <LineBreak />
      <LegalService legalServiceItems={legalServiceItems} dict={dict} />
    </section>
  );
}

OurExpertise.propTypes = {
  dict: PropTypes.object.isRequired,
};

function OurExpertises({ expertiseItems, dict }) {
  return (
    <section className="mt-4 mx-5 md:mx-28">
      <h1 className="text-xl md:text-2xl font-balham text-[#927034]">
        {dict.expertise_title}
      </h1>
      <div className="mt-5 md:mt-7 font-myanmar text-sm md:text-base text-[#231F20]">
        {dict.expertise_description}
      </div>
      <div className="mt-7 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {expertiseItems.map((item, index) => (
          <OurExpertiseItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

OurExpertises.propTypes = {
  expertiseItems: PropTypes.array.isRequired,
  dict: PropTypes.object.isRequired,
};

function OurExpertiseItem({ title, description, image }) {
  return (
    <div
      className="bg-[#D9D9D9] h-[150px] md:h-[175px] flex items-center justify-center relative overflow-hidden group bg-cover"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Title (Centered Vertically and Horizontally) */}
      <h2 className="text-lg md:text-xl text-white font-balham text-center absolute z-10 uppercase">
        {title}
      </h2>

      {/* Description (Initially Off-Screen, Slides Over the Title) */}
      <div className="absolute top-0 right-0 w-full h-full bg-white text-justify text-black text-xs md:text-sm flex items-center p-3 md:p-5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-20">
        {description}
      </div>
    </div>
  );
}

OurExpertiseItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function LineBreak() {
  return <hr className="border-t-2 md:border-t-4 border-[#927034] my-10 md:my-20 mx-5 md:mx-20" />;
}
