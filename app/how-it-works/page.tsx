import Link from 'next/link';
import { Plane, Database, Map as MapIcon, Layers, ChevronRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mapping Process & Workflow',
  description: 'See how we execute our data collection, photogrammetric processing, and engineering quality assurance to deliver superior terrain models.'
};

export default function GeospatialProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Mission Planning & Scope',
      description: 'We define the mapping area, flight grid, and image overlap required to produce accurate terrain models. Airspace compliance and site constraints are verified prior to deployment.',
      details: ['Airspace Authorization', 'GSD Specification', 'Flight Vectoring'],
      image: '/contour_map.jpeg',
    },
    {
      number: '02',
      title: 'Ground Control & Data Capture',
      description: 'Using RTK positioning and GNSS survey control, aerial imagery is captured across the site using structured flight missions designed for photogrammetry reconstruction.',
      details: ['RTK/PPK Positioning', 'GCP Deployment (if needed)', 'Automated Capture'],
      image: '/drone_operator.jpeg',
    },
    {
      number: '03',
      title: 'Photogrammetric Processing',
      description: 'Captured imagery is processed through photogrammetry engines to generate dense point clouds and spatial datasets aligned to survey-grade coordinates.',
      details: ['Point Cloud Generation', 'Coordinate System Alignment', 'Data Calibration'],
      image: '/digital_surface_model.jpeg',
    },
    {
      number: '04',
      title: 'Quality Assurance & Deliverables',
      description: 'Generated datasets are verified against control checkpoints and exported as orthomosaics, terrain models, and point clouds ready for CAD and GIS workflows.',
      details: ['RMSE Verification', 'Format Conversion', 'Final QA Audit'],
      image: '/elevation_heat_map.jpeg',
    }
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Workflow Architecture</h1>
          <p className="text-lg text-slate-400">
            A linear, verifiable protocol from mission planning to deliverable integration. Accuracy is engineered at every step.
          </p>
        </div>
      </section>

      {/* Horizontal Workflow Overview */}
      <section className="py-12 border-b border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Drone Capture</span>
            </div>
            <ChevronRight className="hidden md:block w-6 h-6 text-slate-700" />
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Photogrammetry</span>
            </div>
            <ChevronRight className="hidden md:block w-6 h-6 text-slate-700" />
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
                <MapIcon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Terrain Model</span>
            </div>
            <ChevronRight className="hidden md:block w-6 h-6 text-slate-700" />
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">CAD / GIS Deliverables</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-12 md:pl-0">
              {/* Vertical Line on Desktop */}
              <div className="hidden md:block absolute top-0 bottom-[-6rem] left-1/2 w-px bg-slate-800 -translate-x-1/2 last:bottom-0" />

              <div className={`md:flex items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Visual Graphic Area / Number */}
                <div className="absolute left-0 top-0 md:static md:w-1/2 flex pt-2 md:pt-0">
                  <div className={`md:w-full flex items-center relative ${index % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>

                    {/* The Visual Graphic (Hidden on mobile to preserve layout, shown on desktop) */}
                    <div className={`hidden md:block w-full max-w-sm aspect-video rounded-xl border border-slate-700 shadow-xl overflow-hidden relative ${index % 2 !== 0 ? 'ml-12' : 'mr-12'}`}>
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                    </div>

                    {/* The Intersecting Number */}
                    <div className={`w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-400 z-10 shrink-0 absolute md:top-1/2 md:-translate-y-1/2 ${index % 2 !== 0 ? 'md:-left-8' : 'md:-right-8'}`}>
                      {step.number}
                    </div>

                  </div>
                </div>

                {/* Content Area */}
                <div className="md:w-1/2 pt-4 md:pt-[20px]">
                  <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6 max-w-xl">
                    {step.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="bg-slate-900 border border-slate-800 px-3 py-1 rounded">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Output Configuration CTA */}
      <section className="py-20 mt-12 bg-slate-900 border-y border-slate-800 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule an Acquisition?</h2>
          <p className="text-slate-400 mb-8">
            Our pipeline is built to support your existing CAD and GIS environments. Contact us to establish your project coordinates and deliverable formats.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-bold rounded-md hover:bg-slate-200 transition-colors">
            Request Scope Review
          </Link>
        </div>
      </section>
    </main>
  );
}
