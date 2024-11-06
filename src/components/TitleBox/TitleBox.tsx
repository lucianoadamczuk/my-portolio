import "./TitleBox.css";
interface Props {
  subtitle: string;
  title: string;
  reflectedText?: string;
}
export default function TitleBox({ title, subtitle, reflectedText }: Props) {
  return (
    <div className="TitleBox">
      <h2 className="subtitle"> {subtitle} </h2>
      <h1 className="title"> {title} </h1>

      {reflectedText && (
        <div>
          <span> {reflectedText} </span>
          <span className="reflectedText"> {reflectedText} </span>
        </div>
      )}
    </div>
  );
}
