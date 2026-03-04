import { Award, ShieldAlert, ShieldCheck, Crosshair } from 'lucide-react';

export default function TrustCredentialStrip() {
  return (
    <section className="py-12 border-y border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-1">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-bold text-slate-300 uppercase tracking-wider leading-snug">FAA Part 107<br />Licensed Drone Pilot</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-1">
              <ShieldAlert className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-bold text-slate-300 uppercase tracking-wider leading-snug">OSHA 10 Construction<br />Safety Certified</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-1">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-bold text-slate-300 uppercase tracking-wider leading-snug">$1M General<br />Liability Insurance</span>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-[-4px]">Certificate of Insurance available upon request</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-1">
              <Crosshair className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-bold text-slate-300 uppercase tracking-wider leading-snug">RTK + GCP<br />Accuracy Workflow</span>
          </div>

        </div>
      </div>
    </section>
  );
}
