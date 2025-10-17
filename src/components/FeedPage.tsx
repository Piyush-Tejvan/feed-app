import * as React from 'react';
import { useAuth } from '../context/AuthContext';
import usePostManagement from '../hooks/usePostManagement';
import usePostCreation from '../hooks/usePostCreation';
import useFeedActions from '../hooks/useFeedActions';
import PostCreationForm from './feed/PostCreationForm';
import PostCard from './feed/PostCard';
import SignInPrompt from './feed/SignInPrompt';
import SuccessToast from './common/SuccessToast';
import { MESSAGES } from '../constants';
import './FeedPage.css';

const FeedPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { posts, addPost } = usePostManagement();
  const {
    newPost,
    setNewPost,
    isSending,
    showSuccess,
    isCreating,
    createPost
  } = usePostCreation();
  const {
    handleActionClick,
    handleNotImplemented,
    handleSignIn,
    handleSignUp
  } = useFeedActions();

  const handleSendPost = async () => {
    await createPost(addPost);
  };

  return (
    <div className="feed-page">
      <div className="feed-container">
        <SuccessToast show={showSuccess} message={MESSAGES.POST_CREATED_SUCCESS} />

        {!isAuthenticated && (
          <SignInPrompt onSignIn={handleSignIn} onSignUp={handleSignUp} />
        )}

        <PostCreationForm
          newPost={newPost}
          setNewPost={setNewPost}
          onSendPost={handleSendPost}
          onActionClick={handleActionClick}
          onNotImplemented={handleNotImplemented}
          isSending={isSending}
          isCreating={isCreating}
        />

        <div className="posts-section">
          {posts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              onActionClick={handleNotImplemented}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;