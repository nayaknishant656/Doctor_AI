import React, { useState, useEffect } from 'react';
import { Activity, Brain, TrendingUp, Sparkles, ArrowRight, Shield, Zap, CheckCircle, Target, Users, Microscope, LineChart, HeartPulse } from 'lucide-react';
type Props = {  
}

function about({}: Props) {
  const features = [
    {
      icon: Target,
      title: 'Precision Analysis',
      description: 'Our AI engine processes your blood work with medical-grade accuracy, identifying patterns and anomalies that matter most to your health.'
    },
    {
      icon: Users,
      title: 'Personalized Insights',
      description: 'Get tailored recommendations based on your unique health profile, lifestyle factors, and medical history for truly personalized care.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data is encrypted end-to-end and never shared. We maintain the highest standards of HIPAA compliance and data security.'
    }
  ];

  return (
    <div className="relative bg-slate-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">About Our Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionizing Blood Report
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Analysis with AI
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We combine cutting-edge artificial intelligence with medical expertise to transform how you understand your health. Our platform analyzes over 150 biomarkers, cross-references millions of data points, and delivers actionable insights in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Trusted by Healthcare Professionals</h3>
              <p className="text-slate-300 mb-6">
                Developed in collaboration with leading physicians, medical researchers, and data scientists. Our AI models are trained on millions of anonymized blood reports and continuously validated against clinical outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">FDA Guidelines Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Peer-Reviewed Algorithms</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '99.7%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
                { value: '2M+', label: 'Data Points' },
                { value: '500+', label: 'Medical Partners' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about