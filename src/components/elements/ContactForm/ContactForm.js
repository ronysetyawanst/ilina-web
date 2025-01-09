"use client";
import React from 'react';
import PropTypes from 'prop-types';

export default function ContactForm({ dict, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const mailtoLink = `mailto:help@ilinalawfirm.com?subject=${encodeURIComponent(form.title.value)}&body=${encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\nPhone: ${form.phone.value}\nMessage: ${form.message.value}`)}`;
    window.location.href = mailtoLink;
    onSubmit(); // Call the onSubmit prop to show the success alert
  };

  return (
    <form className="w-full mx-auto py-12" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm text-[#231f20]/50 font-medium mb-2"
          >
            {dict.name}
          </label>
          <input
            id="name"
            type="text"
            className="border-b border-[#231f20]/50 focus:outline-none focus:ring-0 focus:border-[#927034] px-0 py-1 text-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm text-[#231f20]/50 font-medium mb-2"
          >
            {dict.email}
          </label>
          <input
            id="email"
            type="email"
            className="border-b border-[#231f20]/50 focus:outline-none focus:ring-0 focus:border-[#927034] px-0 py-1 text-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm text-[#231f20]/50 font-medium mb-2"
          >
            {dict.phone}
          </label>
          <input
            id="phone"
            type="text"
            className="border-b border-[#231f20]/50 focus:outline-none focus:ring-0 focus:border-[#927034] px-0 py-1 text-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-sm text-[#231f20]/50 font-medium mb-2"
          >
            {dict.title}
          </label>
          <input
            id="title"
            type="text"
            className="border-b border-[#231f20]/50 focus:outline-none focus:ring-0 focus:border-[#927034] px-0 py-1 text-sm"
            required
          />
        </div>

        <div className="col-span-2 flex flex-col mt-6">
          <label
            htmlFor="message"
            className="text-sm text-[#231f20]/50 font-medium mb-2"
          >
            {dict.message}
          </label>
          <textarea
            id="message"
            rows="3"
            className="border-b border-[#231f20]/50 focus:outline-none focus:ring-0 focus:border-[#927034] px-0 py-1 text-sm"
            required
          ></textarea>
        </div>
      </div>

      <div className="mt-12">
        <button
          type="submit"
          className="bg-[#927034] text-white px-6 py-2 text-sm font-medium"
        >
          {dict.send}
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  dict: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};