'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ModalEnquiry, { EnquiryData } from '@/app/components/ModalEnquiry';
import { Project } from '../projects-data';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch('/api/admin/projects');
        if (res.ok) {
          const data = await res.json();
          setAllProjects(data.projects);
          const foundProject = data.projects.find((p: Project) => p.id === params.id);
          setProject(foundProject || null);
        }
      } catch (error) {
        console.error('Failed to load project:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [params.id]);

  const handleEnquiry = async (data: EnquiryData) => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit');
    alert('Thank you! We will contact you soon.');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-500">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/explore-rooms" className="text-orange-500 hover:text-orange-600">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed at top */}
      <div className="fixed top-20 left-4 z-40">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section with Video/Image */}
      <section className="relative h-[70vh] pt-16">
        {project.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.images[0] || '/placeholder.jpg'}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 font-serif italic">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200">
              {project.style}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-orange-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-bold text-gray-900">{project.location}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-orange-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500 mb-1">Year</p>
              <p className="font-bold text-gray-900">{project.year}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-orange-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <p className="text-sm text-gray-500 mb-1">Area</p>
              <p className="font-bold text-gray-900">{project.sqft}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-orange-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="font-bold text-gray-900">{project.duration}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Love This Design?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a similar design customized for your home. Our expert designers will create a personalized plan that fits your space and budget.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
            >
              Get Similar Design for Your Home
            </button>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProjects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/explore-rooms/${p.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.images[0] || '/placeholder.jpg'}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{p.location}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/explore-rooms"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
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
