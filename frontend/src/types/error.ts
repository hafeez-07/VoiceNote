export type RegisterError = {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  general?: string;
};

export type ApiError = {
  errors?: Record<string, string>; //field error
  error?: string; //general error
};
