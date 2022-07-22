import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
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
