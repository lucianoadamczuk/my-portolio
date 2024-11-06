import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { languages } from "../i18n/settings";
import { useTranslation } from "../i18n/server";
import { ReactNode } from "react";
import { dir } from "i18next";
import { IParams } from "@/types/IParams";

const fontTitle = Bebas_Neue({
  weight: "400",
  display: "swap",
  variable: "--fontFamilyTitle",
});

const fontBase = Montserrat({
  weight: "300",
  display: "swap",
  variable: "--fontFamilyBase",
});

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { lang } = await params;
  const { t } = await useTranslation(lang, "metadata");

  const title = t("title");
  const description = t("description");

  return { title, description };
}

interface Props {
  children: ReactNode;
  params: Promise<IParams>;
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${fontTitle.variable} ${fontBase.variable}`}>
        {children}
      </body>
    </html>
  );
}
