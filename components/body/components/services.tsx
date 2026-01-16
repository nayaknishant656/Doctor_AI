import React, { useState, useEffect } from 'react';
import { Activity, Brain, TrendingUp, Sparkles, ArrowRight, Shield, Zap, CheckCircle, Target, Users, Microscope, LineChart, HeartPulse } from 'lucide-react';

type Props = {}

function services({}: Props) {
   const services = [
    {
      icon: Microscope,
      title: 'Complete Blood Count Analysis',
      description: 'Comprehensive evaluation of red blood cells, white blood cells, platelets, and hemoglobin levels with AI-powered anomaly detection.',
      features: ['RBC & WBC Analysis', 'Platelet Count', 'Anemia Detection', 'Infection Markers']
    },
    {
      icon: LineChart,
      title: 'Metabolic Panel Insights',
      description: 'Deep analysis of glucose, cholesterol, liver function, and kidney markers to assess your metabolic health and disease risk.',
      features: ['Lipid Profile', 'Glucose Monitoring', 'Liver Enzymes', 'Kidney Function']
    },
    {
      icon: HeartPulse,
      title: 'Cardiovascular Risk Assessment',
      description: 'Predictive analytics for heart disease risk using cholesterol ratios, inflammation markers, and cardiovascular biomarkers.',
      features: ['Heart Disease Risk', 'Stroke Prediction', 'Inflammation Analysis', 'Preventive Care']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis & Tracking',
      description: 'Monitor your health journey over time with intelligent trend detection and personalized recommendations for improvement.',
      features: ['Historical Tracking', 'Progress Insights', 'Goal Setting', 'Health Forecasting']
    },
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Receive personalized lifestyle, diet, and supplement recommendations based on your unique biomarker profile and health goals.',
      features: ['Diet Suggestions', 'Exercise Plans', 'Supplement Advice', 'Lifestyle Tips']
    },
    {
      icon: Activity,
      title: 'Real-Time Health Monitoring',
      description: 'Get instant alerts for critical values and continuous monitoring of your health metrics with intelligent notification system.',
      features: ['Critical Alerts', 'Smart Notifications', 'Doctor Sync', 'Emergency Protocol']
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Health Analysis
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From basic blood counts to complex metabolic panels, our AI delivers insights that empower you to take control of your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Decode Your Health?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Upload your blood report now and get comprehensive AI-powered insights in under 2 minutes.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default services