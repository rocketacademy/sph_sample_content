export default function Profile(props) {
  console.log(props);
  return (
    <div>
      <p>Hi</p>
      <p>{props.name}--</p>
    </div>
  );
}
