import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isRender, setIsRender] = useState<boolean>(true);

  const handleClickFunction = () => {
    setIsRender(!isRender);
  };

  return (
    <>
      {isRender ? (
        <div>
          <h1>My React and TypeScript Learning Journey</h1>
          <button onClick={handleClickFunction} className='secondary-button'>click me</button>
        </div>
      ) : (
        <button onClick={handleClickFunction} className='primary-button'>Click me</button>
      )}

      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <h1 className='text-5xl font-bold text-red-500'>
          Hello, Tailwind CSS!
        </h1>
      </div>
    </>
  );
};

export default App;
