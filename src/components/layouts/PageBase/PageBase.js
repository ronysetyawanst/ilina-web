"use client";
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { getDictionary } from '../../../app/dictionaries'
import styles from './styles.module.css';
import { i18n, Locale } from "../../../../i18n-config";
import { Footer } from "./Footer";
import { TiTabsOutline } from "react-icons/ti";
import Image from "next/image";
import { AppBarMobile } from "./AppBarMobile";
import { useRecoilValue, useRecoilState } from "recoil";
import { getMessages } from "../../../utils/getMessages";
import { localeAtom } from "../../../state/atom-states";
import useUpdateHtmlLang from "../../../hooks/useUpdateHtmlLang";
import { LocalizationProvider } from "../../../context/LocalizationContextProvider";

export default function PageBase({ children }) {
  const [currentLocale, setCurrentLocale] = useRecoilState(localeAtom);
  const [messages, setMessages] = useState(null);

  useUpdateHtmlLang();

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    async function fetchMessages() {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    }
    fetchMessages();
  }, [currentLocale]);
  
  if (!messages) {
    return null; // or a loading spinner
  }

  return (
    <LocalizationProvider messages={messages} locale={currentLocale}>
      <AppBar lang={currentLocale} dict={messages}/>
      <AppBarMobile lang={currentLocale} dict={messages}/>
      <main className="mt-16 md:mt-0 sm:mt-20">{children}</main>
      <Footer lang={currentLocale} aboutUsTitle={messages.about_us} contactUsTitle={messages.contact_us} stayConnected={messages.stay_connected}/>
      <Link aria-label="Chat on WhatsApp" className="bg-[#25D366] rounded-full fixed bottom-8 right-8 p-2 h-14 w-14 flex items-center justify-center"
        href="https://wa.me/628119790099"
        rel="noopener noreferrer"
        target="_blank">
        <img alt="whatsapp" src="/images/ic-whatsapp-lg.svg" />
      </Link>
    </LocalizationProvider>
  );
}

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
};

function AppBar( { lang, dict } ) {
  return (
    <div className={`flex items-center justify-between py-4 bg-white shadow-md ${styles.appBar}`}>
      <div className="flex items-center px-12">
        <Link href={`/`}>
          <img
            src="/images/logo.png"
            alt="Ilina Law Firm Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1 flex justify-around text-[#927034] text-base font-medium font-myanmar">
        <a href={`/about-us`} className="hover:text-gray-600 uppercase">
          {dict.about_us}
        </a>
        <a href={`/our-team`} className="hover:text-gray-600 uppercase">
          {dict.our_team}
        </a>
        <a href={`/our-expertise`} className="hover:text-gray-600 uppercase">
          {dict.our_expertise}
        </a>
        <a href={`/news`} className="hover:text-gray-600 uppercase">
          {dict.news}
        </a>
        <a href={`/portfolio`} className="hover:text-gray-600 uppercase">
          {dict.portfolio}
        </a>
        <a href={`/contact-us`} className="hover:text-gray-600 uppercase">
          {dict.contact_us}
        </a>
      </nav>
    </div>
  );
}



// export function AppBarMobile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className={styles.appBarMobile}>
//       <Link href="/">
//         <Image
//           alt="Ilina Law Firm"
//           height={40}
//           src="/images/logo.png"
//           width={100}
//         />
//       </Link>
//       <button onClick={() => setIsMenuOpen(true)}>
//         <img alt="menu" src="/images/ic-menu.svg" />
//       </button>
//     </header>
//   );
// }

// export function SideBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navStyles = isMenuOpen ? {
//     width: '12.5rem',
//     display: 'block'
//   } : {
//     width: 0,
//     display: 'none'
//   };
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <aside className={styles.sideBar}>
//       <nav style={{ width: navStyles.width }}>
//         <Link href="/" onClick={closeMenu}>Home</Link>
//         <Link href="/about-us" onClick={closeMenu}>About Us</Link>
//         <Link href="/products" onClick={closeMenu}>Products</Link>
//         <Link href="/factory" onClick={closeMenu}>Factory</Link>
//         <Link href="/contact-us" onClick={closeMenu}>Contact us</Link>
//       </nav>
//       <div onClick={closeMenu} style={{ display: navStyles.display }} />
//     </aside>
//   );
// }

