import { ReactNode } from "react";
import "./ScrollBox.css";
interface Props {
  children: ReactNode;
}
export default function ScrollBox({ children }: Props) {
  return <div className="ScrollBox">{children}</div>;
}
