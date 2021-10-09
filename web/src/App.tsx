import React from 'react';

const App = (): JSX.Element => (
  <div className="App">
    <h1>
      api url:
      {' '}
      {process.env.REACT_APP_API_URL}
    </h1>
  </div>
);

export default App;
