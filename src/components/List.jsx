export default function List(props) {
  return (
    <ul>
      {props.results.map(result => {
        return (
          <li>
            <img
              src={result.images.original.url}
              alt={result.title}
              key={result.id}
            />
          </li>
        );
      })}
    </ul>
  );
}
