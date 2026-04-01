import Link from 'next/link';
import { Map, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Deliverables | 220 Bridge Project',
    robots: {
        index: false,
        follow: false,
    }
};

export default function DeliverableHub() {
    const sections = [
        {
            title: "North East Section",
            description: "Initial capture phase covering the primary overpass and eastern bridge approach.",
            date: "Captured Mar 26, 2026",
            status: "Available",
            href: "/deliverables/220-bridge/north-east",
            bgImage: "url('/residential_progress.jpeg')" // Need a placeholder image here or solid color
        },
        {
            title: "South West Section",
            description: "Secondary capture phase focusing on the western embankment and drainage.",
            date: "Captured Mar 30, 2026",
            status: "Available",
            href: "/deliverables/220-bridge/south-west",
            bgImage: "url('/contour_map.jpeg')"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-950 pb-24">
            {/* Private Portal Header */}
            <header className="border-b border-slate-800 bg-slate-900 px-6 py-12">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">SECURE CLIENT VAULT</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">220 Bridge Project</h1>
                        <p className="text-lg text-slate-400 font-medium max-w-xl">Central Hub for all High-Resolution Digital Twins and Raw Deliverable Data.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-950 px-6 py-4 rounded-xl border border-slate-800 shadow-xl">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30 text-lg">
                            RC
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Prepared For</p>
                            <p className="text-base font-bold text-slate-200">Reeves Construction</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hub Content */}
            <div className="max-w-4xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Select Project Phase</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <Link key={idx} href={section.href} className="group relative block overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] h-64">
                            {/* Background Map Placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                                style={{ backgroundImage: section.bgImage }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                            {/* Card Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-purple-500/20 text-purple-400 p-2 rounded-lg backdrop-blur-sm">
                                        <Map className="w-5 h-5" />
                                    </div>
                                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-emerald-500/20 backdrop-blur-sm">
                                        {section.status}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                    {section.description}
                                </p>

                                <div className="flex items-center justify-between w-full mt-auto">
                                    <span className="text-xs font-medium text-slate-500">{section.date}</span>
                                    <div className="text-purple-400 flex items-center gap-2 text-sm font-bold group-hover:text-purple-300 transition-colors">
                                        Open Digital Twin <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Support Section */}
                <div className="mt-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                    <h4 className="text-lg font-bold text-white mb-2">Need Technical Support?</h4>
                    <p className="text-sm text-slate-400 mb-6">If your engineering team needs assistance importing these models into AutoCAD, Civil3D, or ArcGIS, please reach out directly.</p>
                    <a href="mailto:info@fortuneoraclegeospatial.com" className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm">
                        Contact Drone Team
                    </a>
                </div>

            </div>
        </main>
    );
}
