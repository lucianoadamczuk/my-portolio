import { UseTranslation } from "@/app/i18n/server";
import { TextBox, TitleBox } from "@/components";
import { Main, ScrollBox } from "@/layouts";

interface Props {
  lang: string;
}
export default async function PageAboutMe({ lang }: Props) {
  const { t } = await UseTranslation(lang, "pageAboutMe");
  const pageName = t("pageName");
  const src = "/projects.jpg";
  const alt = t("alt");
  const title = t("title");
  const subtitle = t("subtitle");
  const description = t("description", { returnObjects: true });
  const philosophy = t("philosophy", { returnObjects: true });
  const beyondTheCode = t("beyondTheCode", { returnObjects: true });

  return (
    <Main pageName={pageName} src={src} alt={alt}>
      <ScrollBox>
        <TitleBox title={title} subtitle={subtitle} />

        <TextBox title={description.title} paragraph={description.paragraph} />

        <TextBox title={philosophy.title} paragraph={philosophy.paragraph} />

        <TextBox title={beyondTheCode.title} items={beyondTheCode.items} />
      </ScrollBox>
    </Main>
  );
}
