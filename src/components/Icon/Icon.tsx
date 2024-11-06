import {
  BsTelephone,
  BsMailbox,
  BsFillPinMapFill,
  BsGithub,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import "./Icon.css";
import { TIcons } from "@/types/TIcons";

interface Props {
  as: TIcons;
  size?: "Icon-md" | "Icon-lg";
}
export default function Icon({ as, size = "Icon-md" }: Props) {
  const iconMap = {
    telephone: BsTelephone,
    mailbox: BsMailbox,
    pin: BsFillPinMapFill,
    github: BsGithub,
    web: TbWorldWww,
  };

  const IconComponent = iconMap[as];
  if (!IconComponent) return null;

  return <IconComponent className={size} />;
}
