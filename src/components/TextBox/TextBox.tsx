import "./TextBox.css";

interface Props {
  title: string;
  paragraph?: string;
  items?: string[];
}
export default function TextBox({ title, paragraph, items }: Props) {
  return (
    <article className="TextBox">
      <h3> {title} </h3>
      {paragraph && <p> {paragraph} </p>}

      {items && (
        <div>
          {items.map((item) => (
            <p key={item}> {item} </p>
          ))}
        </div>
      )}
    </article>
  );
}
