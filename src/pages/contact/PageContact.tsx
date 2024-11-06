import { UseTranslation } from "@/app/i18n/server";
import { ContactBox, TitleBox } from "@/components";
import { PERSONAL_INFORMATION } from "@/constants/PERSONAL_INFORMATION";
import { Main, ScrollBox } from "@/layouts";

interface Props {
  lang: string;
}
export default async function PageContact({ lang }: Props) {
  const { t } = await UseTranslation(lang, "pageContact");
  const pageName = t("pageName");
  const src = "/contact.jpg";
  const alt = t("alt");
  const title = t("title");
  const subtitle = t("subtitle");

  const hrefPhone = `https://api.whatsapp.com/send?phone=${PERSONAL_INFORMATION.phone.replace(/[\s+]/g, "")}`;
  const hrefEmail = `mailto:${PERSONAL_INFORMATION.email}`;

  return (
    <Main pageName={pageName} src={src} alt={alt}>
      <ScrollBox>
        <TitleBox title={title} subtitle={subtitle} />
        <article>
          <ContactBox
            href={hrefPhone}
            text={PERSONAL_INFORMATION.phone}
            icon="telephone"
          />
          <ContactBox
            href={hrefEmail}
            text={PERSONAL_INFORMATION.email}
            icon="mailbox"
          />
          <ContactBox text={PERSONAL_INFORMATION.location} icon="pin" />
        </article>
      </ScrollBox>
    </Main>
  );
}
