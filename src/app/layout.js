"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "./globals.css";
import PageBase from "../components/layouts/PageBase";
import { LocalizationProvider } from "../context/LocalizationContextProvider";
import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }) {
  const [locale, setLocale] = useState('id');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || 'id';
    setLocale(savedLocale);
  }, []);

  return (
    <RecoilRoot>
      <html lang={locale}>
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.cdnfonts.com/css/myanmar-text"
          />
          <link
            href="https://fonts.cdnfonts.com/css/balham"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <div id="app">
            <PageBase children={children} />
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
