import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Cholesterol Component
 * Displays LDL, HDL, and Total cholesterol levels with historical bar chart
 * 
 * @param {Object} data - Cholesterol data object
 * @returns {JSX.Element} Cholesterol component
 */
const Cholesterol = ({ data }) => {
  const { ldl, hdl, total, unit, status, history } = data;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Cholesterolll</h3>
            <p className="text-sm text-gray-500">Heart health indicator it shows how the cholesterol levels change over time</p>
          </div>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">LDL</p>
          <p className="text-2xl font-bold text-red-600">{ldl}</p>
          <p className="text-xs text-gray-500">{unit}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">HDL</p>
          <p className="text-2xl font-bold text-green-600">{hdl}</p>
          <p className="text-xs text-gray-500">{unit}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Total</p>
          <p className="text-2xl font-bold text-purple-600">{total}</p>
          <p className="text-xs text-gray-500">{unit}</p>
        </div>
      </div>
      
      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={history}>
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
          <Bar 
            dataKey="ldl" 
            fill="#ef4444" 
            radius={[8, 8, 0, 0]} 
            name="LDL (Bad)"
          />
          <Bar 
            dataKey="hdl" 
            fill="#10b981" 
            radius={[8, 8, 0, 0]} 
            name="HDL (Good)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes for type checking
Cholesterol.propTypes = {
  data: PropTypes.shape({
    ldl: PropTypes.number.isRequired,
    hdl: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    status: PropTypes.string,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        ldl: PropTypes.number.isRequired,
        hdl: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Default props
Cholesterol.defaultProps = {
  data: {
    ldl: 0,
    hdl: 0,
    total: 0,
    unit: 'mg/dL',
    status: 'normal',
    history: [],
  },
};

export default Cholesterol;