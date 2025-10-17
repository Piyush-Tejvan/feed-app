import { useState } from 'react';
import { Post } from '../types';
import { useAuth } from '../context/AuthContext';
import { ANIMATION_DELAYS } from '../constants';

const usePostCreation = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [newPost, setNewPost] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const createPost = async (addPost: (post: Post) => void) => {
    if (!isAuthenticated || !currentUser) {
      return false;
    }
    
    if (newPost.trim()) {
      setIsSending(true);
      setIsCreating(true);
      
      // Simulate sending delay for animation
      await new Promise(resolve => setTimeout(resolve, ANIMATION_DELAYS.POST_CREATION));
      
      const post: Post = {
        id: Date.now(), // Use timestamp for unique ID
        content: newPost.trim(),
        author: currentUser.name,
        timestamp: 'Just now',
        emoji: selectedEmoji,
        profilePicture: '👤'
      };
      
      addPost(post);
      setNewPost('');
      setIsSending(false);
      setIsCreating(false);
      
      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), ANIMATION_DELAYS.SUCCESS_TOAST_DISPLAY);
      
      return true;
    }
    
    return false;
  };

  return {
    newPost,
    setNewPost,
    selectedEmoji,
    setSelectedEmoji,
    isSending,
    showSuccess,
    isCreating,
    createPost
  };
};

export default usePostCreation;
