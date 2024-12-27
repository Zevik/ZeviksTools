export default function ExampleComponent() {
  const name = 'Zevik';

  function greet() {
    console.log(`Hello, ${name}!`);
  }

  return (
    <button onClick={greet}>
      Say Hello
    </button>
  );
}
