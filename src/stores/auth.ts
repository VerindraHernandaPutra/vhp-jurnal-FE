import { createSignal } from 'solid-js';
import { api } from '@/services/api';
import type { User } from '@/types/auth';

const [user, setUser] = createSignal<User | null>(null);
const [loading, setLoading] = createSignal(false);
const [error, setError] = createSignal<string | null>(null);

export function useAuth() {
  async function fetchMe() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.me();
      setUser(res.data ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string, remember = false) {
    setLoading(true);
    setError(null);
    try {
      const res = await api.login({ email, password, remember });
      setUser(res.data);
      return res;
    } catch (e: any) {
      setError(e?.message ?? 'Login failed');
      throw e;
    } finally {
      setLoading(false);
    }
  }

  async function register(name: string, email: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await api.register({ name, email, password });
      setUser(res.data);
      return res;
    } catch (e: any) {
      setError(e?.message ?? 'Registration failed');
      throw e;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setError(null);
    try {
      await api.logout();
      setUser(null);
    } catch (e: any) {
      setError(e?.message ?? 'Logout failed');
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return { user, loading, error, fetchMe, login, register, logout };
}
