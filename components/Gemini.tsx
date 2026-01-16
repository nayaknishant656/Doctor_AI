"use client";
import React, { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import Dashboard from "@/app/dashboard";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAnalysis } from "@/context/AnalysisContext";

type GeminiProps = {
  parsedText: string;
};

export default function Gemini({ parsedText }: GeminiProps) {
  const { toast } = useToast();
  const router = useRouter();
  const { setAnalysisResult: setGlobalAnalysisResult } = useAnalysis();
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState("");
  const [parshedTextTemp, setParsedTextTemp] = useState("");

  function SetParshedTextame() {
    setParsedTextTemp(parsedText);
  }

  const uploadTextToApi = async () => {
    if (!parsedText) {
      toast({
        variant: "destructive",
        title: "No Text Provided",
        description: "Please provide some text before analyzing.",
      });
      return;
    }

    setLoading(true);
    setParsedTextTemp(parsedText);

    try {
      const response = await fetch("/api/analyiz", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parshedTextTemp: parsedText }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze text");
      }

      const result = await response.text(); // use .json() if your API returns JSON
      setAnalysisResult(result);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analysisResult) {
      // Store the analysis result in localStorage or sessionStorage
      localStorage.setItem('analysisReport', analysisResult);
      setGlobalAnalysisResult(analysisResult);
      // Navigate to dashboard
      router.push('/dashboard');
    }
  }, [analysisResult, router, setGlobalAnalysisResult]);

  return (
    <div className="mt-8 w-full max-w-3xl bg-white p-4 rounded shadow">
      <button onClick={SetParshedTextame}>
        Set State of Parshed Text
      </button>
      <button
        onClick={uploadTextToApi}
        disabled={loading}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "View Your Analysis & Download Report"}
      </button>

      {analysisResult && (
        <>
          <div className="mt-4 bg-red-100 p-4 rounded whitespace-pre-wrap text-sm">
            <p>{analysisResult}</p>
          </div>
          <h3>Go to Dashboard to Download Report</h3>
          {/* @ts-ignore */}
          <Dashboard analysisResult={analysisResult} />
          <Link href="/dashboard">Go to Dashboard</Link>
        </>
      )}
    </div>
  );
}