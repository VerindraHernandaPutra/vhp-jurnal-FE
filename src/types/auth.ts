export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string | null;
  updated_at: string | null;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};
