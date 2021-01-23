import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const div = document.querySelector('div');
  expect(div.innerHTML).toContain('Hi there!');
});
