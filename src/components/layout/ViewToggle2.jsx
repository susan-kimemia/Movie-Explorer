// components/layout/ViewToggle.jsx
// Toggle between mobile and desktop views

import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { VIEW_MODES } from '../../utils/constants';

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="mb-4 flex gap-2 bg-white rounded-lg p-1 shadow-md">
      <button
        onClick={() => setViewMode(VIEW_MODES.MOBILE)}
        className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
          viewMode === VIEW_MODES.MOBILE 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Smartphone className="w-4 h-4" />
        Mobile
      </button>
      <button
        onClick={() => setViewMode(VIEW_MODES.DESKTOP)}
        className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
          viewMode === VIEW_MODES.DESKTOP 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Monitor className="w-4 h-4" />
        Desktop
      </button>
    </div>
  );
};

export default ViewToggle;
