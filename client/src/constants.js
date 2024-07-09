import process from 'process';

export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://api.example.com';
export const USERS_URL = 'http://localhost:5000/api/users';
export const ARTICLES = 'api/articles';
export const COMMENTS = 'api/comments';
export const PAYPAL_URL= '/api/articles'