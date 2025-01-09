"use client";
import React from 'react';
import OurExpertise from '../../components/pages/OurExpertise';
import { useLocalization } from '../../context/LocalizationContextProvider';

export default function Page() {
  const { messages } = useLocalization();
  return <OurExpertise dict={messages} />;
}