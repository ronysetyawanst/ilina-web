import React from "react";
import { getDictionary } from "../../../app/dictionaries";
import PropTypes from "prop-types";

export default function OurTeam({ dict }) {
  const teamMembers = [
    {
      image: "/images/img-team-1.jpeg",
      name: "Dewi Anggraeni Sianipar, S.H., M.H.Li",
      title: dict.lawyer,
      description: dict.team_dewi_desc,
      expertise: dict.team_dewi_expertise,
    },
    {
      image: "/images/img-team-2.jpg",
      name: "Yulvia Chandra Cipta, S.H.",
      title: dict.lawyer,
      description: dict.team_yulvia_desc,
      expertise: dict.team_yulvia_expertise,
    },
  ];

  return (
    <section className="my-20 mx-4 md:mx-24 py-10 lg:py-0">
      <Associates dict={dict} />
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            expertise={member.expertise}
          />
        ))}
      </div>
    </section>
  );
}

OurTeam.propTypes = {
  dict: PropTypes.object.isRequired,
};

function Associates({ dict }) {
  return (
    <section>
      <h1 className="text-2xl font-balham text-[#927034]">
        {dict.associates_title}
      </h1>
      <div className="mt-8 font-myanmar text-base text-[#231F20] text-justify">
        {dict.associates_desc}
      </div>
    </section>
  );
}

Associates.propTypes = {
  dict: PropTypes.object.isRequired,
};

function TeamMember({ image, name, title, description, expertise }) {
  return (
    <section className="relative bg-[#D9D9D9] mt-10 px-4 py-6 md:px-12 md:py-9 flex flex-col md:flex-row justify-between gap-8 font-myanmar">
      <div className="flex-none">
        <img
          alt={name}
          src={image}
          className="aspect-square w-full md:w-[350px]"
        />
        <div className="text-center font-balham text-xl text-[#231F20] mt-6">
          {name}
        </div>
        <div className="text-center font-myanmar text-base text-[#927034]">
          {title}
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 justify-between">
        <div className="mt-8 font-myanmar text-base text-justify text-[#231F20]">
          {description}
        </div>
        <div className="mt-8 font-myanmar text-base text-right text-[#927034] self-end">
          Expertise: {expertise}
        </div>
      </div>
    </section>
  );
}

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expertise: PropTypes.string.isRequired,
};
