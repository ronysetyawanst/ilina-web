"use client";
import React from 'react';
import AboutUs from '../../components/pages/AboutUs';
import { useLocalization } from '../../context/LocalizationContextProvider';

export default function Page() {
  const { messages } = useLocalization();
  return <AboutUs dict={messages}/>;
}