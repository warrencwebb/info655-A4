import React, { useState, useEffect } from 'react';
import SongsAndPodcasts from './Components/Playlist';
import './App.css';
import Shuffle from './Components/Shuffle'
import PlayPause from './Components/play&pause';
import Prev from './Components/prev';
import Next from './Components/next';
import Status from './status';

const App = () => {
  const [initialPlaylistData, setInitialPlaylistData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/tracks')
      .then(response => response.json())
      .then(data => {
        setInitialPlaylistData(data);
        setPlaylistData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleShuffle = () => {
    const shuffledPlaylist = [...initialPlaylistData];
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
    }
    setPlaylistData(shuffledPlaylist);
    if (isPlaying) {
      setStatusText(`Playing: ${shuffledPlaylist[currentTrackIndex].title}`);
    }
  };

  const handlePrev = () => {
    const previousIndex = (currentTrackIndex - 1 + playlistData.length) % playlistData.length;
    const prevTrack = playlistData[previousIndex];
    
    if (prevTrack.title) {
      setStatusText(`Playing: ${prevTrack.title}`);
    } else if (prevTrack.episodeTitle) {
      const displayTitle = prevTrack.podcast ? `${prevTrack.podcast}: ${prevTrack.episodeTitle}` : prevTrack.episodeTitle;
      setStatusText(`Playing: ${displayTitle}`);
    }
  
    setCurrentTrackIndex(previousIndex); 
  

    if (!isPlaying) {
      setStatusText('Play');
    }
  };
  
  const handlePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
    if (!isPlaying) {
      setStatusText(`Playing: ${playlistData[currentTrackIndex].title}`);
    } else {
      setStatusText('Paused');
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % playlistData.length;
    const nextTrack = playlistData[nextIndex];
  
    if (nextTrack.title) {
      setStatusText(`Playing: ${nextTrack.title}`);
    } else if (nextTrack.episodeTitle) {
      const displayTitle = nextTrack.podcast ? `${nextTrack.podcast}: ${nextTrack.episodeTitle}` : nextTrack.episodeTitle;
      setStatusText(`Playing: ${displayTitle}`);
    }
  
    setCurrentTrackIndex(nextIndex); 
  
 
    if (!isPlaying) {
      setStatusText('Play');
    }
  };
  const handleAudioDoubleClick = audioItem => {
    if (audioItem.title) {
      setStatusText(`Playing: ${audioItem.title}`);
    } else if (audioItem.episodeTitle) {
      const displayTitle = audioItem.podcast ? `${audioItem.podcast}: ${audioItem.episodeTitle}` : audioItem.episodeTitle;
      setStatusText(`Playing: ${displayTitle}`);
    }
  };

  return (
    <div className="app-container">
      <h1 className="header">Apple Podcasts & Music</h1>
      <Status statusText={statusText} />
      <div className="controls">
        <Shuffle onClick={handleShuffle} />
        <Prev onClick={handlePrev} />
        <PlayPause isPlaying={isPlaying} onClick={handlePlayPause} />
        <Next onClick={handleNext} />
      </div>
      
      <SongsAndPodcasts
        playlistData={playlistData}
        onAudioDoubleClick={handleAudioDoubleClick}
      />
    </div>
  );
};

export default App;
