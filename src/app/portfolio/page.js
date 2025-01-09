"use client";
import React from "react";
import Portfolio from "../../components/pages/Portfolio/Portfolio";
import { useLocalization } from "../../context/LocalizationContextProvider";

export default function Page() {
  const { messages } = useLocalization();
  return <Portfolio dict={messages} />;
}