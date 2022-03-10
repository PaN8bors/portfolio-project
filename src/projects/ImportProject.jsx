export default function Project(props) {
  return (
    <div className="project">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
