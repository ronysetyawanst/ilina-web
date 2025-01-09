"use client";
import React from 'react';
import Main from '../components/pages/Main';
import { useLocalization } from '../context/LocalizationContextProvider';

export default function Page() {
  const { messages } = useLocalization();

  return <Main dict={messages} />;
}