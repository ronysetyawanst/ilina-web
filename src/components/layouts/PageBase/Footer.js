"use client";
import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { localeAtom } from "../../../state/atom-states";

export function Footer( { lang, aboutUsTitle, contactUsTitle, stayConnected } ) {
  const [locale, setLocale] = useRecoilState(localeAtom);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };
  return (
    <footer>
      <div className="bg-[#231f20] py-4 h-auto lg:h-[150px] w-full flex flex-col md:flex-row justify-between items-center text-white text-base font-normal font-myanmar">
        <div className="flex items-center mx-4 md:mx-28 mb-4 md:mb-0">
          <img
            className="w-32 h-14"
            src="/images/logo-med.png"
            alt="Ilina Law Firm Logo"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-around w-full text-center">
          <div className="mb-4 md:mb-0">
            <a
              href={`/about-us`}
              className="text-center text-white hover:text-[#927034]"
            >
              {aboutUsTitle}
            </a>
          </div>

          <div className="mb-4 md:mb-0 flex flex-col justify-center items-center">
            <a
              href={`/contact-us`}
              className="text-center text-white hover:text-[#927034]"
            >
              {contactUsTitle}
            </a>
            <div className="mt-2 w-64 text-center text-white text-xs font-normal font-['Myanmar Text']">
              Epiwalk Office Suite Lt. 5 Unit B537
              <br />
              Jl. Epicentrum Boulevard Bar., Karet Kuningan, Setiabudi, Kota
              Jakarta Selatan 12940
            </div>
          </div>

          <div className="mb-4 md:mb-0">
            <span className="text-white">{stayConnected}</span>
            <div className="flex gap-4 mt-2 justify-center">
              <a href="mailto:help@ilinalawfirm.com">
                <img src="/images/ic-email.svg" alt="Email" className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ilina.lawfirm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/ic-instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.tiktok.com/@ilina.law.firm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ic-tiktok.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/628119790099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/ic-whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <button className={`cursor-pointer ${
                lang === "id"
                  ? "text-white"
                  : "text-white/30 hover:text-white"
              }`} onClick={() => {switchLanguage('id')}}>Bahasa Indonesia</button>
            <span className="text-white/30 text-xl"> | </span>
            <button className={`cursor-pointer ${
                lang === "en"
                  ? "text-white"
                  : "text-white/30 hover:text-white"
              }`} onClick={() => {switchLanguage('en')}}>English</button>

            <div className="text-[#927034] text-sm mt-2">
              © 2024 - Ilina Law Firm
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  aboutUsTitle: PropTypes.string.isRequired,
  contactUsTitle: PropTypes.string.isRequired,
  stayConnected: PropTypes.string.isRequired,
};