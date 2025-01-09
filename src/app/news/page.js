"use client";
import React from 'react';
import News from '../../components/pages/News';
import { useLocalization } from '../../context/LocalizationContextProvider';

export default function Page() {
  const { messages } = useLocalization();
  return <News dict={messages} />;
}