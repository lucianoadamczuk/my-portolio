import { TIcons } from "@/types/TIcons";
import Icon from "../Icon/Icon";
import "./ContactBox.css";
interface Props {
  href?: string;
  icon: TIcons;
  text: string;
}
export default function ContactBox({ href, icon, text }: Props) {
  if (href) {
    return (
      <a href={href} className="ContactBox" target="_blank">
        <Icon as={icon} size="Icon-lg" />
        <p> {text} </p>
      </a>
    );
  }
  return (
    <div className="ContactBox">
      <Icon as={icon} size="Icon-lg" />
      <p> {text} </p>
    </div>
  );
}
