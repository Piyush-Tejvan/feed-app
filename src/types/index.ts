export interface Post {
  id: number;
  content: string;
  author: string;
  timestamp: string;
  emoji: string;
  profilePicture: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => boolean;
  signUp: (name: string, email: string, password: string) => boolean;
  signOut: () => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export interface PostCardProps {
  post: Post;
  onActionClick: () => void;
}

export interface ToolbarProps {
  onNotImplemented: () => void;
}

export interface PostCreationFormProps {
  newPost: string;
  setNewPost: (value: string) => void;
  onSendPost: () => void;
  onActionClick: () => void;
  onNotImplemented: () => void;
  isSending: boolean;
  isCreating: boolean;
}

export interface SignInPromptProps {
  onSignIn: () => void;
  onSignUp: () => void;
}
