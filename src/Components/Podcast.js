import React from 'react';

const Podcast = (props) => {
  const displayTitle = props.podcast ? `${props.podcast}: ${props.episodeTitle}` : props.episodeTitle;
  const displayEpisode = props.season
    ? `Season ${props.season} Episode ${props.episode}`
    : `Episode ${props.episode}`;

  return (
    <div className="podcast">
      <h2>{displayTitle}</h2>
      <p>{displayEpisode}</p>
      {/* Other podcast details */}
    </div>
  );
};

export default Podcast;