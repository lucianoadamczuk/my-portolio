import Link from "next/link";
import "./ProjectBox.css";
interface Props {
  href: string;
  title: string;
  description: string;
}
export default function ProjectBox({ href, title, description }: Props) {
  return (
    <Link href={href} className="ProjectBox">
      <h6> {title} </h6>
      <p> {description} </p>
    </Link>
  );
}
