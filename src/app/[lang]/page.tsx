import PageHome from "@/pages/home/PageHome";
import { IParams } from "@/types/IParams";

interface Props {
  params: Promise<IParams>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  return <PageHome lang={lang} />;
}
