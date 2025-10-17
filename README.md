# Feed App

A simple React TypeScript application with a feed page and authentication system.

## Features

- **Feed Page**: A social media-style feed where users can post messages
- **Authentication**: Sign in/Sign up functionality with dummy authentication
- **Responsive Design**: Clean and modern UI that matches the provided design
- **TypeScript**: Full TypeScript support for type safety

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd feed-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

## Usage

### Authentication

The app comes with two pre-configured test accounts:

**Account 1:**
- Email: `john@example.com`
- Password: `password123`

**Account 2:**
- Email: `jane@example.com`
- Password: `password456`

You can also create new accounts using the sign-up page.

### Features

- **Sign In/Sign Up**: Navigate between authentication pages
- **Feed Page**: View and create posts
- **Post Creation**: Type a message and click "Send" or press Enter
- **Sign Out**: Use the sign out button in the top right corner

## Project Structure

```
src/
├── components/
│   ├── FeedPage.tsx          # Main feed page component
│   ├── FeedPage.css          # Feed page styles
│   ├── SignInPage.tsx        # Sign in page component
│   ├── SignUpPage.tsx        # Sign up page component
│   └── AuthPage.css          # Authentication pages styles
├── context/
│   └── AuthContext.tsx       # Authentication context and state management
├── App.tsx                   # Main app component with routing
├── index.tsx                 # App entry point
└── index.css                 # Global styles
```

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- CSS3
- Create React App

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)
