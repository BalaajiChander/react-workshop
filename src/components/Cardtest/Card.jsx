export default function Card({ name, para, email, ename }) {
  return (
    <card name={name}>
      <p>{para}</p>
      <p>
        <a href={email}>{ename}</a>
      </p>
    </card>
  );
}
