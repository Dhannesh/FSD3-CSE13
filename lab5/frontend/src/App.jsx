const Hello = () => {
  return <h2>Welcome to React 19</h2>;
};

function Book() {
  return (
    <>
      <h1 className="text-red-600 text-3xl ">Let's React</h1>
      <h2>Price : 799</h2>
      <h3>Rating: 4.9</h3>
    </>
  );
}

export default function App() {
  return (
    <>
      <h1 className="text-4xl text-center">Hello React</h1>
      <Hello />
      <Book />
      <Hello />
      <Book />
      <Hello />
      <Book />
      <Hello />
      <Book />
      <Hello />
      <Book />
    </>
  );
}
