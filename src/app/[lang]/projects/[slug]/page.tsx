import PageProjectSlug from "@/pages/projects/slug/PageProjectSlug";
import { IParams } from "@/types/IParams";

interface Props {
  params: Promise<IParams>;
}
export default async function page({ params }: Props) {
  const { lang, slug } = await params;
  return <PageProjectSlug lang={lang} slug={slug} />;
}
