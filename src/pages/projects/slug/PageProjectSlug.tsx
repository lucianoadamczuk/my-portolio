"use client";
import { Icon, Pill, TitleBox } from "@/components";
import { Main } from "@/layouts";
import "./PageProjectSlug.css";
import { UseTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";

interface Props {
  lang: string;
  slug: string;
}

export default function PageProjectSlug({ lang, slug }: Props) {
  const { t } = UseTranslation(lang, "projects");
  const projects = t("projects", { ns: "projects", returnObjects: true });
  const projectFound = projects.find((project) => project.slug === slug);

  const router = useRouter();
  if (!projectFound) {
    return router.push("/not-found");
  }

  const { title, description, technologies, web, github } = projectFound;
  const src = `/projects/${slug}.jpg`;
  const alt = lang === "es" ? "Imagen representativa" : "Representative image";
  const subtitle = lang === "es" ? "- Projecto -" : "- Project -";

  return (
    <Main pageName={title} src={src} alt={alt}>
      <TitleBox title={title} subtitle={subtitle} />
      <p>{description}</p>

      <article className="PillsContainer">
        {technologies.map((technology) => (
          <Pill key={technology} technology={technology} />
        ))}
      </article>

      <article className="LinksContainer">
        <a href={web} target="_blank">
          <Icon as="web" size="Icon-lg" />
        </a>
        <a href={github} target="_blank">
          <Icon as="github" size="Icon-lg" />
        </a>
      </article>
    </Main>
  );
}
