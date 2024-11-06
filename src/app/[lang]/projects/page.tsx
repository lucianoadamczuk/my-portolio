import PageProjects from "@/pages/projects/PageProjects";
import { IParams } from "@/types/IParams";

interface Props {
  params: Promise<IParams>;
}

export default async function page({ params }: Props) {
  const { lang } = await params;
  return <PageProjects lang={lang} />;
}
