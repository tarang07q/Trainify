import { User } from '../types';

// This is a mock database for users
// In a real application, this would be stored in a database
export const users: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User'
  }
];