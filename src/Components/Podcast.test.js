import React from 'react';
import { render } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast Component', () => {
  test('renders Podcast component', () => {
    render(<Podcast episode={1} episodeTitle="Episode Title" />);
  });

  test('renders podcast details correctly', () => {
    const { getByText } = render(<Podcast season={1} episode={1} episodeTitle="Episode Title" />);
    expect(getByText('Season 1 Episode 1')).toBeInTheDocument();
    expect(getByText('Title: Episode Title')).toBeInTheDocument();
  });

  test('renders correctly when Season attribute is missing', () => {
    const { getByText, queryByText } = render(<Podcast episode={1} episodeTitle="Episode Title" />);
    expect(queryByText(/Season/)).toBeNull();
    expect(getByText(/Episode 1/)).toBeInTheDocument(); 
  });
  

  test('handles invalid data types gracefully', () => {
    const { getByText, queryByText } = render(<Podcast season="invalid" episode={1} episodeTitle="Episode Title" />);
    expect(queryByText(/Season/)).toBeInTheDocument(); 
    expect(queryByText(/invalid/)).toBeInTheDocument(); 
    expect(queryByText(/N\/A/)).toBeNull(); 
  });  
});