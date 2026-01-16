'use client';

import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { Activity, Droplet, Heart, TrendingUp, TrendingDown, AlertCircle, Beaker } from 'lucide-react';
import Summary from './components/Summary';
import Hemoglobin from './components/Hemoglobin';
import Cholesterol from './components/Cholestrol';
import WBCCount from './components/WbCcount';
// import Glucose from './components/Glucose'; 
import Glucose from './components/Glucose';
import { useAnalysis } from "@/context/AnalysisContext";
import { useEffect } from 'react';

export default function DashboardBody() {
  const { analysisResult } = useAnalysis();
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (analysisResult) {
      try {
        // Assuming analysisResult is a JSON string. 
        // If it's plain text, you might need a different parsing strategy.
        const parsed = JSON.parse(analysisResult);
        setReportData(parsed);
      } catch (e) {
        console.error("Failed to parse analysisResult:", e);
      }
    }
  }, [analysisResult]);

  const summaryData = {
    totalTests: 12,
    // lastUpdated: new Date().toLocaleDateString(),
    overallHealth: 85,
    criticalAlerts: 0
  };

  const hemoglobinData = {
    current: 14.5,
    unit: 'g/dL',
    status: 'normal',
    trend: 3.2,
    normalRange: '13.5-17.5 g/dL',
    history: [
      { date: 'Jan', value: 13.2 },
      { date: 'Feb', value: 13.8 },
      { date: 'Mar', value: 14.1 },
      { date: 'Apr', value: 14.3 },
      { date: 'May', value: 14.5 }
    ]
  };

  const cholesterolData = {
    ldl: 105,
    hdl: 58,
    total: 175,
    unit: 'mg/dL',
    status: 'optimal',
    history: [
      { date: 'Jan', ldl: 130, hdl: 45 },
      { date: 'Feb', ldl: 125, hdl: 48 },
      { date: 'Mar', ldl: 120, hdl: 52 },
      { date: 'Apr', ldl: 110, hdl: 55 },
      { date: 'May', ldl: 105, hdl: 58 }
    ]
  };

  const wbcData = {
    current: 7.2,
    unit: '× 10³/μL',
    status: 'normal',
    trend: 1.5,
    normalRange: '4.0-11.0 × 10³/μL',
    breakdown: [
      { name: 'Neutrophils', value: 60 },
      { name: 'Lymphocytes', value: 30 },
      { name: 'Monocytes', value: 5 },
      { name: 'Eosinophils', value: 3 },
      { name: 'Basophils', value: 2 }
    ],
    history: [
      { date: 'Jan', value: 6.8 },
      { date: 'Feb', value: 7.0 },
      { date: 'Mar', value: 7.1 },
      { date: 'Apr', value: 7.0 },
      { date: 'May', value: 7.2 }
    ]
  };

  const glucoseData = {
    current: 105,
    unit: 'mg/dL',
    status: 'normal',
    trend: 2.1,
    normalRange: '70-140 mg/dL',
    avgToday: 108,
    history: [
      { time: '6AM', value: 95 },
      { time: '9AM', value: 110 },
      { time: '12PM', value: 140 },
      { time: '3PM', value: 115 },
      { time: '6PM', value: 105 }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-5xl font-bold text-white mb-2">Health Dashboard</h1>
          <p className="text-gray-400 text-lg">Real-time AI analysis of your medical vitals</p>
        </div>

        {/* Summary Component */}
        {/* <Summary data={reportData?.summary || summaryData} /> */}

        {analysisResult && !reportData && (
          <div className="bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-800 mb-8">
            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Beaker className="w-5 h-5" />
              AI Analysis (Plain Text)
            </h2>
            <div className="text-gray-300 bg-slate-800/20 p-4 rounded-lg border border-slate-800 whitespace-pre-wrap text-sm leading-relaxed">
              {analysisResult}
              {reportData}
            </div>
          </div>
        )}

        {/* <p>{reportData}</p> */}
        <pre className="text-xs overflow-auto text-black bg-white p-4 rounded border">
          {JSON.stringify(reportData)}
        </pre>
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Hemoglobin data={reportData?.hemoglobin || hemoglobinData} />
          <Cholesterol data={reportData?.cholesterol || cholesterolData} />
          <WBCCount data={reportData?.wbc || wbcData} />
          <Glucose data={reportData?.glucose || glucoseData} />
        </div>
      </div>
    </div>
  );
}