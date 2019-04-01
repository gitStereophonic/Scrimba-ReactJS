import React from 'react';

import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
  const jokesComponents = jokesData.map(joke => {
    if (joke.punchLine)
      return (
        <Joke key={joke.id} content={{
          question: joke.question,
          punchLine: joke.punchLine
        }} />
      );
    else
      return (joke.text);
  });

  return (
    <div className='joke-list'>
      {jokesComponents}
    </div>
  );
}

export default App;
