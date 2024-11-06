"use client";
import "./Nav.css";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { useParams, useRouter } from "next/navigation";
import { fallbackLng } from "@/app/i18n/settings";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animateLink, setAnimateLink] = useState<"linkEnter" | "linkLeave">(
    "linkLeave",
  );

  function toggle() {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setAnimateLink("linkEnter");
      }, 600);
    }

    if (isOpen) {
      setAnimateLink("linkLeave");
      setTimeout(() => {
        setIsOpen(false);
      }, 800);
    }
  }

  const router = useRouter();
  function handleNavigation(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    toggle();

    setTimeout(() => {
      router.push(href);
    }, 1500);
  }

  const params = useParams<{ lang: string }>();
  const lang = params?.lang || fallbackLng;
  const { t } = useTranslation(lang, "routes");
  const routes = t("routes", { ns: "routes", returnObjects: true });

  return (
    <nav className="Nav">
      <button className="button" onClick={toggle}>
        <div
          className="innerCircle"
          style={{
            backgroundColor: !isOpen
              ? "var(--colorGray)"
              : "var(--colorPrimary)",
          }}
        ></div>
      </button>
      <div
        className="menu"
        style={{
          height: !isOpen
            ? "0px"
            : "calc(100vh - (var(--spaceSM) + var(--spaceMD)))",
        }}
      >
        <div>
          {routes.map((route, index) => (
            <a
              key={`linkItem-${route.path}`}
              onClick={(e) => handleNavigation(e, `/${lang}/${route.path}`)}
              className={`link ${animateLink}`}
              style={{ animationDelay: `${(index + 0.5) * 0.2}s` }}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
