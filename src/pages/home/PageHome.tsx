import { useTranslation } from "@/app/i18n/server";
import { TitleBox } from "@/components";
import { Main } from "@/layouts";

interface Props {
  lang: string;
}
export default async function PageHome({ lang }: Props) {
  const { t } = await useTranslation(lang, "pageHome");
  const pageName = t("pageName");
  const src = "/home.jpg";
  const alt = t("alt");
  const title = "Luciano Adamczuk";
  const subtitle = t("subtitle");
  const reflectedText = t("reflectedText");
  return (
    <Main pageName={pageName} src={src} alt={alt}>
      <TitleBox
        title={title}
        subtitle={subtitle}
        reflectedText={reflectedText}
      />
    </Main>
  );
}
