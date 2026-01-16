import React from 'react';
import { LineChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Glucose Component
 * Displays blood glucose levels with time-based area chart and alerts
 * 
 * @param {Object} data - Glucose data object
 * @returns {JSX.Element} Glucose component
 */
const Glucose = ({ data }) => {
  const { current, unit, status, trend, history, normalRange, avgToday } = data;
  
  /**
   * Get status badge styling based on glucose level
   * @returns {string} Tailwind CSS classes
   */
  const getStatusClasses = () => {
    return status === 'normal' 
      ? 'text-green-600 bg-green-50 border-green-200' 
      : 'text-yellow-600 bg-yellow-50 border-yellow-200';
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Activity className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Blood Glucose</h3>
            <p className="text-sm text-gray-500">Sugar level monitoring</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full border-2 font-semibold ${getStatusClasses()}`}>
          {status.toUpperCase()}
        </div>
      </div>
      
      {/* Current Metrics */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-800">{current}</span>
          <span className="text-xl text-gray-500">{unit}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Normal Range: {normalRange}</p>
        <p className="text-sm text-blue-600 mt-1">
          Today Average: {avgToday} {unit}
        </p>
      </div>
      
      {/* Area Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={history}>
          <defs>
            <linearGradient id="glucoseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="time" 
            stroke="#9ca3af" 
            style={{ fontSize: '12px' }} 
          />
          <YAxis 
            stroke="#9ca3af" 
            style={{ fontSize: '12px' }} 
          />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#f97316" 
            strokeWidth={3} 
            fill="url(#glucoseGradient)" 
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Alert Message (Conditional) */}
      {status !== 'normal' && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            Consider monitoring closely after meals. Consult your healthcare provider if elevated levels persist.
          </p>
        </div>
      )}
    </div>
  );
};

// PropTypes for type checking
Glucose.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['normal', 'high', 'low']).isRequired,
    trend: PropTypes.number,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    normalRange: PropTypes.string.isRequired,
    avgToday: PropTypes.number.isRequired,
  }).isRequired,
};

// Default props
Glucose.defaultProps = {
  data: {
    current: 0,
    unit: 'mg/dL',
    status: 'normal',
    trend: 0,
    history: [],
    normalRange: '70-140 mg/dL',
    avgToday: 0,
  },
};

export default Glucose;