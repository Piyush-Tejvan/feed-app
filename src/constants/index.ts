import { User } from '../types';

export const ANIMATION_DELAYS = {
  POST_CREATION: 800,
  SUCCESS_TOAST_DISPLAY: 3000
} as const;

export const DEFAULT_POSTS = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Theresa Webb',
    timestamp: '5 mins ago',
    emoji: '😔',
    profilePicture: '👩'
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Doe',
    timestamp: '5 mins ago',
    emoji: '☝️',
    profilePicture: '👨'
  },
  {
    id: 3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Doe',
    timestamp: '5 mins ago',
    emoji: '💀',
    profilePicture: '👩'
  }
];

export const DEFAULT_USERS: User[] = [
  { name: 'John Doe', email: 'john@example.com', password: 'password123' },
  { name: 'Jane Smith', email: 'jane@example.com', password: 'password456' }
];

export const MESSAGES = {
  FUNCTION_NOT_IMPLEMENTED: 'Function not implemented',
  POST_CREATED_SUCCESS: 'Post created successfully!',
  WELCOME_TITLE: 'Welcome to FeedIt!',
  WELCOME_DESCRIPTION: 'Sign in to create posts, like, and interact with the community.'
} as const;
