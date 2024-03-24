import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Status = ({ statusText }) => {
  return (
    <div className="status-tab" data-testid="status-element">
      <p>{statusText || 'Select Media'}</p>
    </div>
  );
};

Status.propTypes = {
  statusText: PropTypes.string,
};

export default Status;