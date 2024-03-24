import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';

describe('Song Component', () => {
  test('renders Song component', () => {
    render(<Song title="Random Title" artist="Random Artist" year={2021} />);
  });

  test('renders song details correctly', () => {
    const { getByText } = render(<Song title="Random Title" artist="Random Artist" year={2021} />);
    expect(getByText('Random Title')).toBeInTheDocument();
    expect(getByText('Artist: Random Artist')).toBeInTheDocument();
    expect(getByText('Year: 2021')).toBeInTheDocument();
  });

  test('handles invalid data types gracefully', () => {
    const { getByText } = render(<Song title="Random Title" artist="Random Artist" year="invalid" />);
    expect(getByText('Year: N/A')).toBeInTheDocument();
  });
});