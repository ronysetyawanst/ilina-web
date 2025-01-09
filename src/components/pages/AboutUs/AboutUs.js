import React from "react";
import PropTypes from "prop-types";
import DownloadButton from "../../elements/DownloadButton";

export default function AboutUs({ dict }) {
  return (
    <section>
      <VisionMission dict={dict} />
    </section>
  );
}

AboutUs.propTypes = {
  dict: PropTypes.object.isRequired
};

function VisionMission({ dict }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img-main.png')" }}
    >
      <div className="flex flex-col">
        <div className="bg-[#927034] flex px-10 md:px-28 pt-10 md:pt-20 pb-6 md:pb-12 font-balham text-white flex-col text-justify">
          <h1 className="text-2xl">{dict.vision_mission_title}</h1>
          <div className="pl-4 mt-10 font-myanmar">
            <ul className="space-y-6">
              <li className="list-disc">
                <h2 className="text-xl font-bold inline uppercase">
                  {dict.vision_title}
                </h2>
                <p className="mt-2 text-lg ml-6">{dict.vision_desc}</p>
              </li>
              <li className="list-disc">
                <h2 className="text-xl font-bold inline uppercase">
                  {dict.mission_title}
                </h2>
                <ol className="mt-2 list-decimal list-outside space-y-2 text-lg ml-6">
                  <li>{dict.mission_desc_1}</li>
                  <li>{dict.mission_desc_2}</li>
                  <li>{dict.mission_desc_3}</li>
                  <li>{dict.mission_desc_4}</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-center backdrop-brightness-50">
          <DownloadButton title={dict.download_cp}/>
        </div>
      </div>
    </section>
  );
}
