"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css';

export function AppBarMobile({ lang, dict }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className={styles.appBarMobile}>
        <Link href="/">
          <Image
            alt="Ilina Law Firm"
            height={40}
            src="/images/logo.png"
            width={100}
          />
        </Link>
        <button onClick={() => setIsMenuOpen(true)}>
          <img alt="menu" src="/images/ic-menu.svg" />
        </button>
      </header>
      <SideBar lang={lang} dict={dict} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export function SideBar({ lang, dict, isMenuOpen, setIsMenuOpen }) {
  // const dict = await getDictionary(lang);
  const navStyles = isMenuOpen ? {
    width: '12.5rem',
    display: 'block'
  } : {
    width: 0,
    display: 'none'
  };
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <aside className={styles.sideBar}>
      <nav style={{ width: navStyles.width }}>
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
      <div onClick={closeMenu} style={{ display: navStyles.display }} />
    </aside>
  );
}

// export function SideBar({ isMenuOpen, setIsMenuOpen }) {
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
//       <a href={`/${lang}/about-us`} className="hover:text-gray-600 uppercase">
//           {dict['about-us']}
//         </a>
//         <a href={`/${lang}/our-team`} className="hover:text-gray-600 uppercase">
//           {dict['our-team']}
//         </a>
//         <a href={`/${lang}/our-expertise`} className="hover:text-gray-600 uppercase">
//           {dict['our-expertise']}
//         </a>
//         <a href={`/${lang}/news`} className="hover:text-gray-600 uppercase">
//           {dict['news']}
//         </a>
//         <a href={`/${lang}/portfolio`} className="hover:text-gray-600 uppercase">
//           {dict['portfolio']}
//         </a>
//         <a href={`/${lang}/contact-us`} className="hover:text-gray-600 uppercase">
//           {dict['contact-us']}
//         </a>
//       </nav>
//       <div onClick={closeMenu} style={{ display: navStyles.display }} />
//     </aside>
//   );
// }
