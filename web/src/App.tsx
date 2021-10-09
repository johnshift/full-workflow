import React from 'react';

const App = (): JSX.Element => (
  <div className="App">
    <p>trigger change ..</p>
    <h1>
      api url:
      {' '}
      {process.env.REACT_APP_API_URL}
    </h1>
  </div>
);

export default App;
