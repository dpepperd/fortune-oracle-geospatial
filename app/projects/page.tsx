import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function GeospatialProjectsPage() {
  const projects = [
    {
      id: 'residential-parcel',
      title: 'Residential Parcel Terrain Model',
      category: 'TOPOGRAPHIC MAPPING',
      specs: ['Area: ~1.2 Acres', 'GSD: 1.8 cm', 'Accuracy: <4 cm RMSE', 'Deliverables: Orthomosaic, DSM, 1-ft Contours'],
      description: 'Generated a high-resolution orthomosaic and digital terrain model of a residential parcel to demonstrate contour generation and elevation analysis for small development and drainage planning.',
      img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
    },
    {
      id: 'stormwater-retention',
      title: 'Stormwater Retention Basin Elevation Survey',
      category: 'SITE ANALYSIS',
      specs: ['Area: ~3 Acres', 'GSD: 2 cm', 'Accuracy: <5 cm RMSE', 'Deliverables: Orthomosaic, DSM, Elevation Contours'],
      description: 'Captured aerial imagery of a stormwater retention basin to generate terrain contours and surface models used for drainage inspection and maintenance planning.',
      img: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80',
    },
    {
      id: 'stockpile-volume',
      title: 'Landscape Material Stockpile Volume Estimate',
      category: 'VOLUMETRIC ANALYSIS',
      specs: ['Area: ~2 Acres', 'Frequency: On-Demand', 'Accuracy: ±5% Volume Estimate', 'Deliverables: DSM, Volume Estimate Report'],
      description: 'Photogrammetry-based terrain modeling used to estimate stockpile volume at a landscape supply yard. Generated a dense point cloud and digital surface model for material inventory analysis.',
      img: 'https://images.unsplash.com/photo-1541888087405-ebcf7c186064?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sample Output</h1>
          <p className="text-lg text-slate-400">
            Case studies demonstrating applied terrain intelligence for commercial engineering and development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Visual Placeholder */}
              <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 relative overflow-hidden shadow-xl">
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url(${project.img})` }}
                 />
                 <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-colors group-hover:bg-slate-900/10" />
              </div>

              {/* Content */}
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-purple-500 mb-3 block">
                  {project.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 pr-12">
                  {project.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
                  <h3 className="text-xs font-bold uppercase text-slate-500 mb-3 border-b border-slate-800 pb-2">Technical Specs</h3>
                  <ul className="space-y-2">
                    {project.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="text-sm text-slate-300 font-mono">{spec}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors">
                  Request Similar Data Package
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
