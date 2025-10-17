import { useState } from 'react';
import { Post } from '../types';
import { DEFAULT_POSTS } from '../constants';

const usePostManagement = () => {
  const [posts, setPosts] = useState<Post[]>(DEFAULT_POSTS);

  const addPost = (post: Post) => {
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  return {
    posts,
    addPost
  };
};

export default usePostManagement;
