import MediaUpload from '@/app/components/MediaUpload';

export const metadata = {
  title: 'Media Upload | Elvenwood Interior',
  description: 'Upload images and videos for your interior design projects',
};

export default function MediaUploadPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Media Upload
          </h1>
          <p className="text-lg md:text-xl text-gray-300 animate-fadeIn">
            Upload and manage images and videos for your design portfolio
          </p>
        </div>
      </section>

      {/* Upload Content */}
      <section className="py-20">
        <MediaUpload />
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">How to Use Uploaded Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Images</h3>
              <p className="text-gray-700 mb-4">
                Use the Next.js Image component for optimized delivery:
              </p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-auto">
{`import Image from 'next/image';

<Image
  src="/uploads/[filename]"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
/>`}
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Videos</h3>
              <p className="text-gray-700 mb-4">
                Use HTML5 video element or embed:
              </p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-auto">
{`<video width="800" height="600" controls>
  <source
    src="/uploads/[filename]"
    type="video/mp4"
  />
</video>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
