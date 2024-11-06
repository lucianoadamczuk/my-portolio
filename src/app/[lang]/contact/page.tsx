import PageContact from "@/pages/contact/PageContact";
import { IParams } from "@/types/IParams";
interface Props {
  params: Promise<IParams>;
}

export default async function page({ params }: Props) {
  const { lang } = await params;
  return <PageContact lang={lang} />;
}
