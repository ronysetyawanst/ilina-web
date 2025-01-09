"use client";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function SocialMedia({ title }) {
  const [embedSocialLoaded, setEmbedSocialLoaded] = useState(false);

  useEffect(() => {
    const loadEmbedSocial = () => {
      const script = document.createElement("script");
      script.src = "https://embedsocial.com/cdn/ht.js";
      script.id = "EmbedSocialHashtagScript";
      script.onload = () => setEmbedSocialLoaded(true);
      document.head.appendChild(script);
    };

    const loadTikTokScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.tiktok.com/embed.js";
      document.head.appendChild(script);
    };

    loadEmbedSocial();
    loadTikTokScript();
  }, []);

  return (
    <div className="flex px-4 md:px-24 justify-items-center flex-1 flex-col font-myanmar md:min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl text-[#927034] ml-4 md:ml-16">{title}</h1>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="mb-6 md:mb-0 px-4 md:px-16 flex justify-center items-center">
        {!embedSocialLoaded && <div></div>}
        <blockquote className="w-full md:max-w-none md:min-w-none border border-gray-200 rounded-lg shadow-lg h-[500px] md:h-full overflow-y-scroll">
          <div
            className="embedsocial-hashtag"
            data-ref="0286d9d2c49645c0ed8b2f4fdfb6cc1379c6c259"
          ></div>
        </blockquote>
      </div>
    </div>
  );
}

SocialMedia.propTypes = {
  title: PropTypes.string.isRequired,
};
