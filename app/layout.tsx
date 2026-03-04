import type { Metadata } from 'next';
import Link from 'next/link';
import GeospatialChatWidget from './components/GeospatialChatWidget';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fortune Oracle Geospatial | High-Accuracy Terrain Intelligence',
  description: 'High-accuracy RTK drone mapping, photogrammetry, and terrain intelligence for developers, commercial builders, and land investors.',
};

export default function GeospatialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-200">
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-purple-500">♦</span> Fortune Oracle <span className="text-slate-400 font-normal">Geospatial</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Project Examples</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/contact" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors">
                Request Site Quote
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-slate-800 bg-slate-950 py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <div className="text-center md:text-left">
              <div>&copy; {new Date().getFullYear()} Fortune Oracle Media. Geospatial Division.</div>
              <div className="text-slate-600 mt-1">Based in Middleburg, Florida</div>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            </div>
          </div>
        </footer>
        <GeospatialChatWidget />
      </body>
    </html>
  );
}
