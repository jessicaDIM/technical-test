export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  role?: 'ADMIN' | 'DEV';
}

export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
