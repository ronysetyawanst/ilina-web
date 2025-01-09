"use client";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ContactForm from "../../elements/ContactForm";
import { getDictionary } from '../../../app/dictionaries';

export function ContactUs({ dict }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleFormSubmit = () => {
    setShowSuccess(true);
  };

  const handleOverlayClick = () => {
    setShowSuccess(false);
  };

  return (
    <section className="pt-20 px-6 md:px-20 pb-20">
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
          <SuccessAlert dict={dict} />
        </div>
      )}
      <h1 className="text-xl md:text-2xl font-balham text-[#927034]">
        {dict.contact_us_title}
      </h1>
      <div className="mt-7 font-myanmar text-sm md:text-base text-[#231F20]">
        {dict.contact_us_description}
      </div>
      <div className="flex flex-col md:flex-row mt-7 gap-11">
        <img src="/images/img-contact-us.png" className="w-full md:w-80 object-cover" />
        <div className="w-full">
          <ContactForm dict={dict} onSubmit={handleFormSubmit} />
          <div className="w-full h-20 flex flex-col md:flex-row justify-between">
            <div>
              <div className="mb-2 text-[#927034] text-sm md:text-base font-normal font-['Myanmar Text']">
                {dict.contact}
              </div>
              <div className="text-[#231f20] text-xs font-normal font-['Myanmar Text']">
                {dict.whatsapp}: +62 811 979 0099
                <br />
                {dict.email}: help@ilinalawfirm.com
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="mb-2 text-[#927034] text-sm md:text-base font-normal font-['Myanmar Text']">
                {dict.address}
              </div>
              <div className="text-[#231f20] text-xs font-normal font-['Myanmar Text']">
                Epiwalk Office Suite Lt. 5 Unit B537
                <br />
                Jl. Epicentrum Boulevard Bar., Karet Kuningan, Setiabudi, Kota
                Jakarta Selatan 12940
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactUs.propTypes = {
  dict: PropTypes.object.isRequired
};

function SuccessAlert({ dict }) {
  return (
    <div className="bg-[#927034] p-4 h-[230px] w-[350px] flex flex-col justify-center items-center">
      <div className="text-white p-4 rounded-md text-center text-2xl font-balham">
        {dict.thanks}
      </div>
      <div className="text-white text-center mt-2">
        {dict.thanks_for_contacting}
      </div>
    </div>
  );
}

SuccessAlert.propTypes = {
  dict: PropTypes.object.isRequired
};

ContactForm.propTypes = {
  dict: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};