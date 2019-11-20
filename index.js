import React from 'react';
import ReactDOM from 'react-dom';
import Msg from "./test-pkg"

const App = () => (
  <div>
    <h1>Hello friends</h1>
    <Msg />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
