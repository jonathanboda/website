'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface UploadedMedia {
  url: string;
  filename: string;
  type: 'image' | 'video';
}

export default function MediaUpload() {
  const [uploadedMedia, setUploadedMedia] = useState<UploadedMedia[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      await uploadFile(file);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      // Determine media type
      const mediaType = file.type.startsWith('image') ? 'image' : 'video';

      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', mediaType);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Upload failed');
      }

      const data = await response.json();
      setUploadedMedia((prev) => [
        ...prev,
        {
          url: data.url,
          filename: data.filename,
          type: data.type,
        },
      ]);
      setSuccess(`${file.name} uploaded successfully!`);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred during upload'
      );
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setSuccess('URL copied to clipboard!');
    setTimeout(() => setSuccess(null), 2000);
  };

  const deleteMedia = (filename: string) => {
    setUploadedMedia((prev) =>
      prev.filter((media) => media.filename !== filename)
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Upload Area */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Upload Media</h2>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="cursor-pointer block"
          >
            <div className="text-5xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">
              {uploading ? 'Uploading...' : 'Drop files here or click to select'}
            </h3>
            <p className="text-gray-600 mb-4">
              Supported: JPEG, PNG, WebP, GIF (images) and MP4, MOV, WebM (videos)
            </p>
            <p className="text-gray-500 text-sm">Max file size: 50MB</p>
          </label>
        </div>

        {/* Messages */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}
      </div>

      {/* Uploaded Media */}
      {uploadedMedia.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Uploaded Media ({uploadedMedia.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uploadedMedia.map((media) => (
              <div
                key={media.filename}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Preview */}
                <div className="bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                  {media.type === 'image' ? (
                    <Image
                      src={media.url}
                      alt={media.filename}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={media.url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-sm font-mono text-gray-600 break-all mb-3">
                    {media.filename}
                  </p>

                  {/* URL Input */}
                  <input
                    type="text"
                    value={media.url}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm font-mono mb-3"
                  />

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(media.url)}
                      className="flex-1 px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition"
                    >
                      Copy URL
                    </button>
                    <button
                      onClick={() => deleteMedia(media.filename)}
                      className="flex-1 px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>

                  {/* Code Snippet */}
                  <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                    <p className="text-gray-600 mb-1">Use in page:</p>
                    {media.type === 'image' ? (
                      <code className="font-mono text-gray-700 break-all">
                        &lt;Image src="{media.url}" alt="desc" width={'{800}'} height={'{600}'} /&gt;
                      </code>
                    ) : (
                      <code className="font-mono text-gray-700 break-all">
                        &lt;video src="{media.url}" controls /&gt;
                      </code>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
