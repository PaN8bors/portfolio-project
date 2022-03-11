export default function Project(props) {
  return (
    <div className="project">
      <a href={props.url}><h1>{props.name}</h1></a>
      <p>{props.description}</p>
    </div>
  );
}
