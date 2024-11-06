import "./Pill.css";
interface Props {
  technology: string;
}
export default function Pill({ technology }: Props) {
  return <div className="Pill">{technology}</div>;
}
