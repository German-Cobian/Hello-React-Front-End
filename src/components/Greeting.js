

const Greeting = () => {
  (
    <div>
      <h1>{greeting.text}</h1>
      <button
        type="button"
        onClick={() => dispatch(fetchGreeting())}
      >
        Get another greeting
      </button>
    </div>
  );
};

export default Greeting;
