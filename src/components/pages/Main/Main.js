"use client";
import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import SocialMedia from "../../elements/SocialMedia";
import { useRouter } from "next/navigation";

export default function Main({ dict }) {
  const router = useRouter();
  const handleArticleClick = (index) => {
    router.push(`/article/${index + 1}`);
  };

  return (
    <section className="w-full overflow-x-hidden">
      <Banner />
      <Slogan dict={dict} />
      <About dict={dict} />
      <SocialMedia title={dict.social_media} />
      <Article dict={dict} onArticleClick={handleArticleClick} />
    </section>
  );
}

Main.propTypes = {
  dict: PropTypes.object.isRequired,
};

function Banner() {
  return <img src="/images/img-main.png" className="w-full h-auto" />;
}

function Slogan({ dict }) {
  return (
    <div className="bg-[#231F20]">
      <div className="py-14 items-center flex flex-col justify-center slide-up-fade-in px-4 md:px-0">
        <h1 className="mb-7 text-white text-3xl md:text-5xl font-balham slide-up text-center">
          Lex semper dabit remedium
        </h1>
        <h2 className="text-white text-xl md:text-2xl font-balham slide-up text-center">
           {dict.slogan}
        </h2>
      </div>
    </div>
  );
}

function About({ dict }) {
  return (
    <div
      className="px-4 md:px-40 py-12 flex flex-col md:flex-row justify-between mb-20 font-myanmar items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <img
        src="/images/logo-lg.png"
        className="self-center mb-8 md:mb-0 md:mr-32 w-full md:w-auto"
      />
      <div className="h-auto ml-0 md:ml-8 mb-2">
        <p className="text-base text-justify leading-7 mb-8">
          {dict.ilina_desc_1}
          <br />
          <br />
          {dict.ilina_desc_2}
          <br />
        </p>
        <a href={`/about-us`} className="text-[#927034] underline">
          {dict.more_ilina_desc}
        </a>
      </div>
    </div>
  );
}

function Article({ dict, onArticleClick }) {
  const articles = dict.articles;

  return (
    <div
      className="flex px-4 md:px-24 justify-items-center flex-1 flex-col my-16 font-myanmar"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <h1 className="text-2xl text-[#927034] ml-4 md:ml-16">{dict.news}</h1>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative max-w-full md:max-w-[48%] min-w-[288px] mb-8 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => onArticleClick(index)}
          >
            <img
              src="/images/img-article-bg.png"
              alt="Article Background"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-lg font-semibold text-center px-4">
                {article.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
