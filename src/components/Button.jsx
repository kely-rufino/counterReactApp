export function Button({ clickHandler, text }) {
  return <button onClick={clickHandler}>{text}</button>;
}
