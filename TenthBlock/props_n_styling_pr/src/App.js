import React from 'react';

import Joke from './components/Joke';

function App() {
  return (
    <div className='joke-list'>
      <Joke
        content={{
          question: "What's the best thing about Switzerland?",
          punchLine: "I don't know, but the flag is a big plus!"
        }}
      />
      <Joke
        content={{
          question: "Did you hear about the mathematician who's afraid of negative numbers?",
          punchLine: "He'll stop at nothing to avoid them!"
        }}
      />
      <Joke
        content={{
          question: "Hear about the new restaurant called Karma?",
          punchLine: "There’s no menu: You get what you deserve."
        }}
      />
      <Joke
        content={{
          question: "Did you hear about the actor who fell through the floorboards?",
          punchLine: "He was just going through a stage."
        }}
      />
      <Joke
        content={{
          question: "Did you hear about the claustrophobic astronaut?",
          punchLine: "He just needed a little space."
        }}
      />
      #ExtraJoke
      <Joke
        content={{
          punchLine: "Ty pidor"
        }}
      />
    </div>
  );
}

export default App;
