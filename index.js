import React from 'react';
import ReactDOM from 'react-dom';
import Msg from "./components/Msg"

const App = () => (
    <Msg />
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
