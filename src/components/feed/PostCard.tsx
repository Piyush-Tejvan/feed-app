import * as React from 'react';
import { PostCardProps } from '../../types';

const PostCard: React.FC<PostCardProps> = ({ post, onActionClick }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <div className="profile-picture">{post.profilePicture}</div>
          <div className="user-details">
            <div className="user-name">{post.author}</div>
            <div className="post-timestamp">{post.timestamp}</div>
          </div>
        </div>
      </div>
      
      <div className="post-content">
        <div className="post-emoji">{post.emoji}</div>
        <div className="post-text">{post.content}</div>
      </div>

      <div className="post-actions">
        <button className="action-icon" onClick={onActionClick}>❤️</button>
        <button className="action-icon" onClick={onActionClick}>💬</button>
        <button className="action-icon" onClick={onActionClick}>➤</button>
      </div>
    </div>
  );
};

export default PostCard;
