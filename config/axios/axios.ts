export const axiosConfig = {
  timeout: 15000,
  validateStatus: (status: number) => status < 600,
} as const;
