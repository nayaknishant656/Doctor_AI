"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisContextType {
    analysisResult: string;
    setAnalysisResult: (result: string) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
    const [analysisResult, setAnalysisResult] = useState<string>("");

    return (
        <AnalysisContext.Provider value={{ analysisResult, setAnalysisResult }}>
            {children}
        </AnalysisContext.Provider>
    );
}

export function useAnalysis() {
    const context = useContext(AnalysisContext);
    if (context === undefined) {
        throw new Error('useAnalysis must be used within an AnalysisProvider');
    }
    return context;
}
