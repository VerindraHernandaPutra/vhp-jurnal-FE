// Lightweight fetch client for Laravel Sanctum (cookie-based)
import type { ApiResponse, User } from '@/types/auth';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

async function getCsrfCookie(): Promise<void> {
  // This sets XSRF-TOKEN cookie (readable) + laravel_session (httpOnly)
  await fetch('/sanctum/csrf-cookie', {
    method: 'GET',
    credentials: 'include',
  });
}

async function request<T>(
  url: string,
  options: RequestInit = {},
  includeXsrf: boolean = false
): Promise<T> {
  const headers = new Headers(options.headers ?? {});
  headers.set('Accept', 'application/json');
  if (includeXsrf) {
    const token = getCookie('XSRF-TOKEN');
    if (token) headers.set('X-XSRF-TOKEN', token);
  }
  const res = await fetch(API_BASE + url, {
    ...options,
    headers,
    credentials: 'include', // send cookies
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw err;
  }
  return (await res.json()) as T;
}

export const api = {
  async me() {
    return request<ApiResponse<User>>('/me', { method: 'GET' });
  },

  async login(payload: { email: string; password: string; remember?: boolean }) {
    await getCsrfCookie();
    return request<ApiResponse<User>>('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }, true);
  },

  async register(payload: { name: string; email: string; password: string }) {
    await getCsrfCookie();
    return request<ApiResponse<User>>('/register', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }, true);
  },

  async logout() {
    await getCsrfCookie();
    return request<{ message: string }>('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }, true);
  },
};
