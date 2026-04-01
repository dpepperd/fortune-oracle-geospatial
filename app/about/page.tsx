import Link from 'next/link';
import {
  Play, ArrowRight, CheckSquare,
  Map, Camera, Ruler, Mountain, Box, Share2,
  PhoneCall, BadgeCheck, ShieldAlert, ShieldCheck, Mail, MapPin
} from 'lucide-react';
import TrustCredentialStrip from '../components/TrustCredentialStrip';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Geospatial Engineering Team',
  description: 'Learn about Fortune Oracle Geospatial and our mission to deliver highly accurate terrain data using advanced UAVs and RTK systems.'
};

export default function GeospatialAboutPage() {
  return (
    <main className="pb-24">
      {/* SECTION 1 — HERO WITH VIDEO */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Drone Mapping &amp; Site Data You Can Trust
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Fast, professional aerial mapping for builders, developers, and property owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/#project-examples" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-lg transition-colors border border-slate-700">
                See Deliverables
              </Link>
            </div>
          </div>
          <div className="relative w-full">
            <p className="text-sm font-semibold text-slate-300 mb-3 ml-1">Meet Dirk — Founder of Fortune Oracle Geospatial</p>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group cursor-pointer shadow-2xl">
              {/* Placeholder Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=2697&auto=format&fit=crop")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center text-white backdrop-blur-md shadow-lg group-hover:bg-purple-500 transition-colors">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">Who we help • What we deliver • How fast you get it</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <TrustCredentialStrip />

      {/* SECTION 3 — COMPANY STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Fortune Oracle Geospatial Exists</h2>
            <div className="prose prose-slate prose-invert">
              <p className="text-lg text-slate-400 leading-relaxed">
                We exist to help builders, developers, and property owners truly understand their land. By leveraging advanced drone mapping technology, we turn complex project sites into clear, actionable visual data. Our mission is to eliminate guesswork and replace it with precision terrain intelligence.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">What Makes FOG Different</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckSquare className="w-3.5 h-3.5 text-purple-400" /></div>
                <span className="text-slate-300 leading-relaxed">Clear deliverables</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckSquare className="w-3.5 h-3.5 text-purple-400" /></div>
                <span className="text-slate-300 leading-relaxed">Fast communication and turnaround</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckSquare className="w-3.5 h-3.5 text-purple-400" /></div>
                <span className="text-slate-300 leading-relaxed">Professional job-site conduct</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckSquare className="w-3.5 h-3.5 text-purple-400" /></div>
                <span className="text-slate-300 leading-relaxed">Accuracy workflow using RTK or GCP methods</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 — DELIVERABLES GRID */}
      <section className="py-24 px-6 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Deliver</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Map, title: "Orthomosaic Map", desc: "High resolution aerial site map." },
              { icon: Camera, title: "Site Progress Photos", desc: "Weekly or milestone aerial documentation." },
              { icon: Ruler, title: "2D Measurements & Markups", desc: "Distance and area measurement overlays." },
              { icon: Mountain, title: "Contour / Elevation Visualizations", desc: "Terrain representation for site understanding." },
              { icon: Box, title: "3D Site Model", desc: "3D visual model when required." },
              { icon: Share2, title: "Shareable Web Map", desc: "Online viewable aerial map." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{feature.desc}</p>
                <Link href="#" className="text-sm font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider inline-flex items-center">
                  View Sample <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS & SECTION 6 — PROFESSIONAL CREDENTIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
              <div className="relative flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-purple-500/30 flex items-center justify-center shrink-0 z-10 text-purple-400 font-bold">1</div>
                <h3 className="text-xl font-bold text-white">Quick Scope Call</h3>
              </div>
              <div className="relative flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-purple-500/30 flex items-center justify-center shrink-0 z-10 text-purple-400 font-bold">2</div>
                <h3 className="text-xl font-bold text-white">Drone Flight &amp; Processing</h3>
              </div>
              <div className="relative flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-purple-500/30 flex items-center justify-center shrink-0 z-10 text-purple-400 font-bold">3</div>
                <h3 className="text-xl font-bold text-white">Deliverables Provided</h3>
              </div>
            </div>
            <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg inline-block">
              <p className="text-sm text-purple-300 font-medium">Most projects delivered within 24–72 hours depending on acreage and outputs.</p>
            </div>
          </div>

          {/* Professional Credentials */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Professional Credentials</h2>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <BadgeCheck className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-lg font-bold text-white">FAA Part 107 Licensed Drone Pilot</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldAlert className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-lg font-bold text-white">OSHA 10 Construction Safety Certified</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-lg font-bold text-white">Fully insured — $1M general liability coverage</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckSquare className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-lg font-bold text-white">Construction site compliant PPE and safety procedures</span>
              </div>
              <div className="flex items-center gap-4">
                <Map className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-lg font-bold text-white">RTK + GCP mapping workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Example Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Tile 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-800 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610444654924-42fbc94ebfb8?q=80&w=1200&auto=format&fit=crop")' }}></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Residential Lot Mapping</h3>
                <ul className="space-y-2 mb-6 text-sm text-slate-400 flex-1">
                  <li><strong className="text-slate-300">Objective:</strong> Boundary context & pre-development documentation.</li>
                  <li><strong className="text-slate-300">Deliverables:</strong> Orthomosaic, Context Photos.</li>
                  <li><strong className="text-slate-300">Turnaround:</strong> 24 Hours</li>
                </ul>
                <Link href="/contact" className="text-sm font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider inline-flex items-center">
                  Request Similar Project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-800 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888045958-37c22e434316?q=80&w=1200&auto=format&fit=crop")' }}></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Commercial Site Progress Tracking</h3>
                <ul className="space-y-2 mb-6 text-sm text-slate-400 flex-1">
                  <li><strong className="text-slate-300">Objective:</strong> Weekly stakeholder updates.</li>
                  <li><strong className="text-slate-300">Deliverables:</strong> Orbital Photos, Annotated Issues List.</li>
                  <li><strong className="text-slate-300">Turnaround:</strong> Same-day delivery</li>
                </ul>
                <Link href="/contact" className="text-sm font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider inline-flex items-center">
                  Request Similar Project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-800 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582260654716-e578f2445b23?q=80&w=1200&auto=format&fit=crop")' }}></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Grading / Drainage Visualization</h3>
                <ul className="space-y-2 mb-6 text-sm text-slate-400 flex-1">
                  <li><strong className="text-slate-300">Objective:</strong> Visual grading confirmation.</li>
                  <li><strong className="text-slate-300">Deliverables:</strong> Orthomosaic, Elevation Visualization (DSM).</li>
                  <li><strong className="text-slate-300">Turnaround:</strong> 48 Hours</li>
                </ul>
                <Link href="/contact" className="text-sm font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider inline-flex items-center">
                  Request Similar Project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-slate-950/50 p-6 rounded-lg border border-slate-800/50">
            <p className="text-sm text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Fortune Oracle Geospatial provides aerial mapping and visual documentation services and is not a licensed surveyor. Outputs are for planning and visualization unless a licensed survey workflow is engaged.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CALL TO ACTION */}
      <section className="py-24 px-6 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-950 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Ready to Put Site Data to Work?</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors">
              Request a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors border border-purple-500/30">
              Book a Call
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 pt-12 border-t border-slate-800 inline-flex mx-auto text-left w-full md:w-auto">
            <div className="flex items-center gap-4">
              <PhoneCall className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-slate-300">(904) 555-0199</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-slate-300">ops@fortuneoraclegeospatial.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Service Area</p>
                <p className="text-slate-300">Jacksonville / NE Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
