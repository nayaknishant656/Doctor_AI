import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Beaker } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * WBCCount Component
 * Displays White Blood Cell count with a breakdown pie chart and status indicators.
 * Optimized with black font colors for high readability.
 * * @param {Object} data - WBC data object
 * @returns {JSX.Element} WBCCount component
 */
export default function WBCCount({ data }) {
  const { current, unit, status, history, normalRange, breakdown } = data;
  
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  /**
   * Get status badge styling
   * @returns {string} Tailwind CSS classes
   */
  const getStatusClasses = () => {
    return status === 'normal' 
      ? 'text-green-700 bg-green-50 border-green-200' 
      : 'text-yellow-700 bg-yellow-50 border-yellow-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Beaker className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">WBC Count</h3>
            <p className="text-sm text-black opacity-70 font-medium">Immune system health</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full border-2 font-bold text-xs ${getStatusClasses()}`}>
          {status.toUpperCase()}
        </div>
      </div>
      
      {/* Main Metric */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-black">{current}</span>
          <span className="text-xl text-black font-semibold opacity-60">{unit}</span>
        </div>
        <p className="text-sm text-black font-semibold mt-2">Normal Range: {normalRange}</p>
      </div>
      
      {/* Chart and Legend Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={breakdown}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={5}
                dataKey="value"
              >
                {breakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-col justify-center space-y-3">
          {breakdown.map((item, index) => (
            <div key={index} className="flex items-center gap-2 group">
              <div 
                className="w-3 h-3 rounded-full shadow-sm" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-sm text-black font-bold opacity-80 group-hover:opacity-100">{item.name}</span>
              <span className="ml-auto text-sm font-black text-black">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// PropTypes for type checking
WBCCount.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['normal', 'high', 'low']).isRequired,
    normalRange: PropTypes.string.isRequired,
    breakdown: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Default props
WBCCount.defaultProps = {
  data: {
    current: 0,
    unit: 'thousand/µL',
    status: 'normal',
    normalRange: '3.8 - 10.8',
    breakdown: [
      { name: 'Neutrophils', value: 60 },
      { name: 'Lymphocytes', value: 30 },
      { name: 'Others', value: 10 }
    ],
  },
};