import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const Root = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
