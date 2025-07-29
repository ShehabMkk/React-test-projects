import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={message} />
      <button onClick={() => setMessage('Message updated!')}>Update Message</button>
    </div>
  );
};

export default Parent; 