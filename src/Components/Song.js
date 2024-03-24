import React from 'react';

const Song = (props) => {
  const title = props[0];
  const artist = props[1];
  const year = props[2];
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <h3>{year}</h3>
    </div>
  );
};

export default Song;