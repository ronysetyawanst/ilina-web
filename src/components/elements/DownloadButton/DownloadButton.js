"use client";
import PropTypes from "prop-types";
import React from "react";
import { saveAs } from "file-saver";

export default function DownloadButton({ title }) {
  const handleDownload = () => {
    saveAs("/ilina-cv.pdf", "Ilina Law Firm Company Profile.pdf");
  };
  return (
    <button onClick={handleDownload} className="my-20 inline-flex h-[50px] bg-[#D9D9D9] self-center pb-3 pt-5 rounded-md hover:bg-[#c0c0c0] transition-colors duration-300 justify-center items-center shadow-md px-6 uppercase">
      <div className="flex text-lg text-[#927034] font-myanmar text-center items-center content-center">
        {title}
      </div>
    </button>
  );
}

DownloadButton.propTypes = {
  title: PropTypes.string.isRequired
};