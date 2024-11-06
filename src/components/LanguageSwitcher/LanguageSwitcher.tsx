"use client";
import { fallbackLng, languages } from "@/app/i18n/settings";
import "./LanguageSwitcher.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const splitedPathnamne = pathname?.split("/").filter(Boolean);

  const currentLang = splitedPathnamne?.[0] ?? fallbackLng;
  const newPathname = splitedPathnamne?.slice(1).join("/");

  return (
    <article className="LanguageSwitcher">
      {languages.map((lang) => (
        <Link
          key={`language-switcher-item-${lang}`}
          href={`/${lang}/${newPathname}`}
          className={currentLang === lang ? "langSelected" : "link"}
        >
          {lang}
        </Link>
      ))}
    </article>
  );
}
