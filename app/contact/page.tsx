'use client';

import { useState } from 'react';
import { Mail, Phone, Loader2, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function GeospatialContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="pb-24">
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Fortune Oracle Geospatial</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Contact our team to discuss mapping requirements, project scope, and geospatial deliverables.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</div>
                    <a href="tel:+19042107697" className="text-white font-medium hover:text-purple-400 transition-colors">(904) 210-7697</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</div>
                    <a href="mailto:ops@fortuneoraclegeospatial.com" className="text-white font-medium hover:text-purple-400 transition-colors">ops@fortuneoraclegeospatial.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 transition-colors w-full justify-center">
                <LinkIcon className="w-4 h-4 text-purple-400" />
                Request Site Quote
              </Link>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 lg:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Delivered</h3>
                  <p className="text-slate-400">Our operations team will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Company</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="ACME Corp" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="jdoe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Location</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="City, State, or Coordinates" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Description</label>
                    <textarea required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Briefly describe your mapping needs..." />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
