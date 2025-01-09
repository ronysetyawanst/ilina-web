"use client";
import React from "react";
import OurTeam from "../../components/pages/OurTeam";
import { useLocalization } from "../../context/LocalizationContextProvider";

export default function Page({ params: { lang } }) {
  const { messages } = useLocalization();

  return <OurTeam dict={messages} />;
}