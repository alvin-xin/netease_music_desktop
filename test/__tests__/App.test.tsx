import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../../src/container/demo/count/Counter';

test('renders learn react link', () => {
  const { getByText } = render(<Counter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
