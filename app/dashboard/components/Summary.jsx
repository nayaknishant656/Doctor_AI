import React from 'react';
import PropTypes from 'prop-types';
import { Activity, AlertCircle } from 'lucide-react';

/**
 * Summary Component (Black Font Version)
 * Displays health metrics with a light-mode optimized color palette.
 * * @param {Object} data - Summary data object
 * @returns {JSX.Element} Summary component
 */
export default function Summary({ data }) {
  const { totalTests, lastUpdated, overallHealth, criticalAlerts } = data;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-xl p-8 border border-slate-200">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-black">Health Summary</h2>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
          <p className="text-sm text-black font-semibold opacity-70 mb-1">Total Tests</p>
          <p className="text-3xl font-extrabold text-black">{totalTests}</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
          <p className="text-sm text-black font-semibold opacity-70 mb-1">Overall Health</p>
          <p className="text-3xl font-extrabold text-black">{overallHealth}%</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
          <p className="text-sm text-black font-semibold opacity-70 mb-1">Critical Alerts</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-extrabold text-black">{criticalAlerts}</p>
            {criticalAlerts > 0 && <AlertCircle className="w-5 h-5 text-red-600" />}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
          <p className="text-sm text-black font-semibold opacity-70 mb-1">Status</p>
          <p className="text-2xl font-bold text-black">
            {criticalAlerts === 0 ? '✓ Good' : '⚠ Review'}
          </p>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="mt-6 text-sm text-black font-medium flex items-center gap-2 opacity-80">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Last Updated: {lastUpdated || 'Just now'}
      </div>
    </div>
  );
}

// PropTypes for type checking
Summary.propTypes = {
  data: PropTypes.shape({
    totalTests: PropTypes.number.isRequired,
    lastUpdated: PropTypes.string,
    overallHealth: PropTypes.number.isRequired,
    criticalAlerts: PropTypes.number.isRequired,
  }).isRequired,
};

// Default props
Summary.defaultProps = {
  data: {
    totalTests: 0,
    lastUpdated: 'Not available',
    overallHealth: 0,
    criticalAlerts: 0,
  },
};