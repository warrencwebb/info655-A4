import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SongsAndPodcasts from './Playlist';

describe('Playlist Component', () => {
  test('renders Playlist component', () => {
    render(<SongsAndPodcasts />);
  });

  
  test('shuffle button should shuffle playlist', () => {
    const { getByTestId } = render(<SongsAndPodcasts />);
    const shuffleButton = getByTestId('shuffle-button');
    fireEvent.click(shuffleButton);
  });

  test('play/pause button should toggle play/pause status', () => {
    const { getByTestId } = render(<SongsAndPodcasts />);
    const playPauseButton = getByTestId('play-pause-button');
    fireEvent.click(playPauseButton);
  });

  
  test('previous track button should play previous track', () => {
    const { getByTestId } = render(<SongsAndPodcasts />);
    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);
  });

  test('next track button should play next track', () => {
    const { getByTestId } = render(<SongsAndPodcasts />);
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
  });
});