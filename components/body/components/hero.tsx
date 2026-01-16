"use client";

import React, { useState, useEffect } from 'react';
import { Activity, Brain, TrendingUp, Sparkles, ArrowRight, Shield, Zap, CheckCircle, Target, Users, Microscope, LineChart, HeartPulse } from 'lucide-react';

// Hero Component
export default  function Hero() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    { value: '98%', label: 'Accuracy Rate', color: 'from-emerald-400 to-teal-500' },
    { value: '<2min', label: 'Analysis Time', color: 'from-blue-400 to-cyan-500' },
    { value: '50K+', label: 'Reports Analyzed', color: 'from-purple-400 to-pink-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">AI-Powered Blood Analysis</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Your Health,
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Decoded by AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Transform complex blood reports into actionable health insights in minutes. Our AI analyzes your results and provides personalized recommendations backed by medical intelligence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Analyze Your Report
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Activity className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Medical-Grade AI</span>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    activeMetric === index ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                  }`}
                  style={{
                    top: index === 0 ? '10%' : index === 1 ? '45%' : '80%',
                    right: index === 1 ? '-10%' : '5%',
                  }}
                >
                  <div className={`bg-gradient-to-r ${metric.color} p-6 rounded-2xl shadow-xl min-w-[160px]`}>
                    <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-white/80">{metric.label}</div>
                  </div>
                </div>
              ))}

              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full animate-ping"></div>
                  <div className="absolute w-48 h-48 bg-cyan-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute w-32 h-32 bg-blue-500/30 rounded-full"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-3xl shadow-2xl">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Glucose', 'Cholesterol', 'Hemoglobin'].map((item, i) => (
                  <div key={i} className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                    <div className="text-xs text-slate-400">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Brain, label: 'AI Models', value: '12+' },
            { icon: Activity, label: 'Parameters', value: '150+' },
            { icon: TrendingUp, label: 'Success Rate', value: '98%' },
            { icon: Shield, label: 'Data Security', value: '256-bit' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}