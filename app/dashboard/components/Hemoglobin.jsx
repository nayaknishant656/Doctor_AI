import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Droplet, TrendingUp, TrendingDown } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Hemoglobin Component
 * Displays hemoglobin levels with historical trend and status indicators
 * * @param {Object} data - Hemoglobin data object
 * @returns {JSX.Element} Hemoglobin component
 */
export default function Hemoglobin({ data }) {
  const { current, unit, status, trend, history, normalRange } = data;

  /**
   * Get status badge styling based on blood levels
   * @returns {string} Tailwind CSS classes
   */
  const getStatusColor = () => {
    if (status === 'normal') return 'text-green-600 bg-green-50 border-green-200';
    if (status === 'low') return 'text-red-600 bg-red-50 border-red-200';
    return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-lg">
            <Droplet className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Hemoglobin</h3>
            <p className="text-sm text-gray-500">Blood oxygen carrier</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full border-2 font-semibold ${getStatusColor()}`}>
          {status.toUpperCase()}
        </div>
      </div>

      {/* Current Metrics */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-800">{current}</span>
          <span className="text-xl text-gray-500">{unit}</span>
          <span className={`ml-auto flex items-center gap-1 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {Math.abs(trend)}%
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Normal Range: {normalRange}</p>
      </div>

      {/* Historical Trend Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={history}>
          <defs>
            <linearGradient id="hemoGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
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
            stroke="#dc2626" 
            strokeWidth={2} 
            fill="url(#hemoGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// PropTypes for type checking
Hemoglobin.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['normal', 'high', 'low']).isRequired,
    trend: PropTypes.number,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    normalRange: PropTypes.string.isRequired,
  }).isRequired,
};

// Default props
Hemoglobin.defaultProps = {
  data: {
    current: 0,
    unit: 'g/dL',
    status: 'normal',
    trend: 0,
    history: [],
    normalRange: '13.8-17.2 g/dL',
  },
};