"use client"
import React from 'react';
import { ContactUs } from '../../components/pages/ContactUs/ContactUs';
import { useLocalization } from '../../context/LocalizationContextProvider';

export default function Page() {
  const { messages } = useLocalization();
  return <ContactUs dict={messages} />;
}