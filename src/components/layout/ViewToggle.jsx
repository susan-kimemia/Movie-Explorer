// components/layout/ViewToggle.jsx
// Toggle between mobile and desktop views

import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { VIEW_MODES } from '../../utils/constants';

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="view-toggle">
      <button
        onClick={() => setViewMode(VIEW_MODES.MOBILE)}
        className={`view-toggle-button ${
          viewMode === VIEW_MODES.MOBILE ? 'active' : ''
        }`}
      >
        <Smartphone size={16} />
        Mobile
      </button>
      <button
        onClick={() => setViewMode(VIEW_MODES.DESKTOP)}
        className={`view-toggle-button ${
          viewMode === VIEW_MODES.DESKTOP ? 'active' : ''
        }`}
      >
        <Monitor size={16} />
        Desktop
      </button>
    </div>
  );
};

export default ViewToggle;
