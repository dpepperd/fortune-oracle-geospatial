import Link from 'next/link';
import { Download, FileBox, Layers, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

import ModelViewer from '../../../components/client/ModelViewer';
import OrthoViewer from '../../../components/client/OrthoViewer';

export const metadata: Metadata = {
    title: 'Deliverables | 220 Bridge Project',
    robots: {
        index: false,
        follow: false, // Keep client-specific portals out of Google
    }
};

export default function DeliverableDashboard() {
    const modelUrl = 'https://pub-52a1995c574f4feabfe90d167713373e.r2.dev/projects/220-bridge-project/web/southwest-section/odm_textured_model_geo.glb';
    const orthoUrl = 'https://pub-52a1995c574f4feabfe90d167713373e.r2.dev/projects/220-bridge-project/web/southwest-section/southwest_220_bridge_ortho.jpg';
    const demUrl = 'https://pub-52a1995c574f4feabfe90d167713373e.r2.dev/projects/220-bridge-project/web/southwest-section/southwest_bridge_DEM_working.jpg';

    const downloadLinks = [
        { title: 'High-Res Orthomosaic', format: 'JPG', size: '16.8 MB', icon: MapPin },
        { title: '3D Terrain Model', format: 'GLB', size: '920 MB', icon: FileBox },
        { title: 'Digital Elevation Model (DEM)', format: 'JPG', size: '14 MB', icon: Layers },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pb-24">
            {/* Private Portal Header */}
            <header className="border-b border-slate-800 bg-slate-900 px-6 py-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-2">SECURE CLIENT VAULT</div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">220 Bridge Project</h1>
                        <p className="text-slate-400 font-medium">South West Section • Captured Mar 30, 2026</p>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-950 px-4 py-3 rounded-lg border border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">
                            RC
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Prepared For</p>
                            <p className="text-sm font-bold text-slate-200">Reeves Construction Company</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Dashboard Content */}
            <div className="max-w-7xl mx-auto px-6 mt-10 space-y-12">

                {/* Top Full-Width Section: 3D Viewer & Metadata */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-white">Interactive 3D Terrain Model</h2>
                        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">South West Section</span>
                    </div>

                    <ModelViewer
                        url={modelUrl}
                        metadata={{
                            title: "220 Bridge Infrastructure Model",
                            location: "North East Section",
                            date: "3/26/26",
                            drone: "Matrice 4E",
                            processing: "DJI Terra",
                            altitude: "150 ft",
                            gsd: "0.486 in/px",
                            accuracy: "Relative (Non-Survey)",
                            coordinateSystem: "UTM Zone 17N"
                        }}
                    />
                </div>

                <hr className="border-slate-800" />

                {/* High-Resolution Orthomosaic Viewer */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl flex-shrink-0 font-bold text-white">High-Resolution Orthomosaic</h2>
                        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap hidden sm:inline-block">South West Section</span>
                    </div>

                    <OrthoViewer url={orthoUrl} alt="220 Bridge High Res Orthomosaic" />
                </div>

                <hr className="border-slate-800" />

                {/* Digital Elevation Model (DEM) Viewer */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl flex-shrink-0 font-bold text-white">Digital Elevation Model (DEM)</h2>
                        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap hidden sm:inline-block">South West Section</span>
                    </div>

                    <OrthoViewer url={demUrl} alt="220 Bridge Digital Elevation Model" />
                </div>

                <hr className="border-slate-800" />

                {/* Bottom Section: Downloads List */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Raw Deliverable Assets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {downloadLinks.map((link, idx) => (
                            <button key={idx} className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-purple-500/50 transition-all group text-left">
                                <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-700 group-hover:border-purple-500/30 transition-colors shadow-inner">
                                    <link.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-200 mb-2">{link.title}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2 py-1 rounded uppercase">{link.format}</span>
                                        <span className="text-xs text-slate-500 font-medium">{link.size}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Engineering Disclaimer */}
                <div className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-6 mt-12 text-center md:text-left">
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Engineering Usage Disclaimer
                    </h4>
                    <p className="text-sm text-amber-500/70 leading-relaxed max-w-4xl">
                        These digital twins and corresponding raw data files are provided for visual inspection, volumetric estimation, and site planning purposes only. They are not intended to replace sealed boundary surveys or structural engineering assessments. Verify all critical elevations and measurements with on-site RTK rovers prior to construction activities.
                    </p>
                </div>

            </div>
        </main>
    );
}
