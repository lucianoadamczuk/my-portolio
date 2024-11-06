import { useTranslation } from "@/app/i18n/server";
import { ProjectBox, TitleBox } from "@/components";
import { Main, ScrollBox } from "@/layouts";

interface Props {
  lang: string;
}

export default async function PageProjects({ lang }: Props) {
  const { t } = await useTranslation(lang, ["pageProjects", "projects"]);
  const pageName = t("pageName");
  const src = "/projects.jpg";
  const alt = t("alt");
  const title = t("title");
  const subtitle = t("subtitle");
  const projects = t("projects", { ns: "projects", returnObjects: true });

  return (
    <Main pageName={pageName} src={src} alt={alt}>
      <ScrollBox>
        <TitleBox title={title} subtitle={subtitle} />
        <article>
          {projects.map((project) => (
            <ProjectBox
              key={project.slug}
              href={`projects/${project.slug}`}
              title={project.title}
              description={project.description}
            />
          ))}
        </article>
      </ScrollBox>
    </Main>
  );
}
