import { NextRequest, NextResponse } from 'next/server';
import {
  verifyPassword,
  generateToken,
  checkRateLimit,
  getClientIP,
} from '@/app/lib/auth';

// POST - Validate admin login and return JWT token
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many login attempts. Please try again later.',
          retryAfter: rateLimit.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter),
          },
        }
      );
    }

    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get credentials from environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    // Check if environment variables are configured
    if (!adminEmail || !adminPasswordHash) {
      console.error('Admin credentials not configured in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Validate email (case-insensitive)
    if (email.toLowerCase() !== adminEmail.toLowerCase()) {
      // Use same error message to prevent email enumeration
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Validate password using bcrypt (timing-safe comparison)
    const isValidPassword = await verifyPassword(password, adminPasswordHash);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken({
      email: adminEmail,
      role: 'admin',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        token,
        expiresIn: '24h',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
