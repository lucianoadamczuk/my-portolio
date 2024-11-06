import { ReactNode } from "react";
import "./Main.css";
import Nav from "../Nav/Nav";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

interface Props {
  pageName: string;
  src: string;
  alt: string;
  children: ReactNode;
}
export default function Main({ pageName, src, alt, children }: Props) {
  return (
    <main className="Main">
      <section className="sectionAnimation">
        <h2 className="pageName pageNameAnimation">{pageName}</h2>
      </section>

      <section className="section2Animation">
        <article className="contentContainer">
          <LanguageSwitcher />
          <div className="children">{children}</div>
          <div className="imageContainer">
            <Image
              src={src}
              alt={alt}
              fill
              className="image imageAnimation"
              priority
            />
          </div>
          <Nav />
        </article>
      </section>
    </main>
  );
}
