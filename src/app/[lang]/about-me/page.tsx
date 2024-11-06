import PageAboutMe from "@/pages/about-me/PageAboutMe";
import { IParams } from "@/types/IParams";

interface Props {
  params: Promise<IParams>;
}
export default async function page({ params }: Props) {
  const { lang } = await params;
  return <PageAboutMe lang={lang} />;
}
