import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractTokenFromHeader } from '@/app/lib/auth';

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'video/mp4',
  'video/quicktime',
  'video/webm',
];

// Map MIME types to file extensions for validation
const MIME_TO_EXT: Record<string, string[]> = {
  'image/jpeg': ['jpg', 'jpeg'],
  'image/png': ['png'],
  'image/webp': ['webp'],
  'image/gif': ['gif'],
  'video/mp4': ['mp4'],
  'video/quicktime': ['mov'],
  'video/webm': ['webm'],
};

/**
 * Validate admin authentication using JWT token
 */
function checkAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const token = extractTokenFromHeader(authHeader);

  if (!token) {
    return false;
  }

  const payload = verifyToken(token);
  return payload !== null && payload.role === 'admin';
}

export async function POST(request: NextRequest) {
  // Validate JWT token - uploads require authentication
  if (!checkAdminAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized - valid JWT token required' },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string; // 'image' or 'video'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `File type not allowed. Allowed types: images (JPEG, PNG, WebP, GIF) and videos (MP4, MOV, WebM)` },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 50MB limit' },
        { status: 400 }
      );
    }

    // Create upload directory if it doesn't exist
    await mkdir(UPLOAD_DIR, { recursive: true });

    // Generate unique filename with validated extension
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    // Use extension based on MIME type, not user-provided filename
    const allowedExtensions = MIME_TO_EXT[file.type];
    const ext = allowedExtensions ? allowedExtensions[0] : 'bin';
    const filename = `${timestamp}-${randomStr}.${ext}`;
    const filepath = join(UPLOAD_DIR, filename);

    // Convert File to Buffer and write
    const bytes = await file.arrayBuffer();
    await writeFile(filepath, Buffer.from(bytes));

    // Return the public URL
    const publicUrl = `/uploads/${filename}`;

    return NextResponse.json(
      {
        success: true,
        message: 'File uploaded successfully',
        url: publicUrl,
        filename: filename,
        type: type,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
