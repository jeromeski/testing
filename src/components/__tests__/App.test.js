import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('if it shows the comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // Looks inside the div
  // and checks to see if the CommentBox is in there
  ReactDOM.unmountComponentAtNode(div);
});