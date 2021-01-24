import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';
import reducers from '../../reducers';

it('shows the comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    div
  );
  // Looks inside the div
  // and checks to see if the CommentBox is in there

  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});
