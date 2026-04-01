import { ShieldCheck, Download } from 'lucide-react';

export default function ReportHeader() {
    return (
        <div className="flex justify-between items-center border-b border-slate-100 pb-5 no-print">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-200">
                    <ShieldCheck size={24} className="text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                        DOCTOR AI
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                        Report Insight <span className="text-slate-200 mx-1">|</span> v2.4
                    </span>
                </div>
            </div>
            <button
                onClick={() => window.print()}
                className="group relative px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[12px] font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"></div>
                <div className="flex items-center gap-2 relative z-10">
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    EXPORT PDF
                </div>
            </button>
        </div>
    );
}
