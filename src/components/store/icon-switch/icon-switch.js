import './icon-switch.css';
import React from 'react';
import PropTypes from 'prop-types';
import ViewMode from './view-mode';

function IconSwitch(props) {
  const { viewMode } = props;
  const icon = viewMode === ViewMode.list ? ViewMode.module : ViewMode.list;

  return (
    <div className='icon-container'>
      <span className="material-icons" onClick={() => props.onSwitch(icon)}>{icon}</span>
    </div>
  );
}

IconSwitch.propTypes = {
  viewMode: PropTypes.oneOf([ViewMode.list, ViewMode.module]).isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default IconSwitch;