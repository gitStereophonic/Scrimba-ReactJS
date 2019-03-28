import React from 'react';
import ReactDOM from 'react-dom';

// More common function form
// Without "() =>"
function App() {
  const firstName = 'Sergey';
  const lastName = 'Chinkov';

  const date = new Date();
  const hours = date.getHours();
  let timeSuffix = 'pm';
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
    timeSuffix = 'am';
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  }
  else {
    timeOfDay = 'night';
  }

  return (
    <div>
      <h1>{`Good ${timeOfDay}, ${firstName} ${lastName}`}!</h1>
      <h2>{`It's currently about ${date.getHours() % 12}${timeSuffix}.`}</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
