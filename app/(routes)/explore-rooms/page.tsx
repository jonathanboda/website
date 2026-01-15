'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';
import { Project, categories } from './projects-data';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/admin/projects');
        if (res.ok) {
          const data = await res.json();
          setProjects(data.projects);
        }
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit');
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/facility/Production & Craft.webp"
            alt="Elvenwood Projects"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Explore our portfolio of completed residential interiors
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 mb-8">
            Showing {filteredProjects.length} of {projects.length} residential projects
          </p>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-500">Loading projects...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/explore-rooms/${project.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0] || '/placeholder.jpg'}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                    {/* Image Count */}
                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-2 py-1 rounded-full">
                        +{project.images.length - 1}
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                        {project.style}
                      </span>
                      {project.featured && (
                        <span className="bg-amber-50 text-orange-600 text-xs px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.year}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {project.sqft}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Let's create something extraordinary together. Schedule a consultation to discuss your vision.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Modal Enquiry */}
      <ModalEnquiry
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleEnquiry}
      />
    </div>
  );
}
