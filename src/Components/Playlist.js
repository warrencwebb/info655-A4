import React from "react";

const SongsAndPodcasts = () => {
  const songs = [
    {
      title: "A Milli",
      artist: "Lil Wayne",
      year: 2008,
    },
    {
      title: "Uptown",
      artist: "Drake",
      year: 2010,
    },
    {
      title: "Runaway",
      artist: "Kanye West",
      year: 2013,
    },
  ];

  const podcasts = [
    {
      season: 1,
      episode: 101,
      espisodeTitle: 'Houston We have a Problem',
    },
    {
        episode: 203,
        espisodeTitle: 'The Lies We tell',
    },
    {
        season: 4,
        episode: 404,
        espisodeTitle: 'System Error',
    },
  ];

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.title}>{song.title} by {song.artist} in {song.year}</li>
        ))}
      </ul>
      <h1>Podcasts</h1>
      <ul>
        {podcasts.map((podcast) => (
          <li key= {podcast.espisodeTitle}><p>{podcast.espisodeTitle}</p>
          {podcast.season && <p> Season: {podcast.season}</p>}
           <p>Episode: {podcast.episode}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default SongsAndPodcasts;