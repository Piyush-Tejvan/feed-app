import * as React from 'react';
import { PostCreationFormProps } from '../../types';
import Toolbar from './Toolbar';

const PostCreationForm: React.FC<PostCreationFormProps> = ({
  newPost,
  setNewPost,
  onSendPost,
  onActionClick,
  onNotImplemented,
  isSending,
  isCreating
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendPost();
    }
  };

  return (
    <div className={`post-creation-card ${isCreating ? 'creating' : ''}`}>
      <Toolbar onNotImplemented={onNotImplemented} />

      {/* Text Input Area */}
      <div className="text-input-area">
        <div className="emoji-picker">
          <button className="emoji-btn" onClick={onNotImplemented}>😊</button>
        </div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          onKeyPress={handleKeyPress}
          onClick={onActionClick}
          placeholder="How are you feeling today?"
          className="post-textarea"
          rows={3}
        />
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-left">
          <button className="action-btn" onClick={onNotImplemented}>+</button>
          <button className="action-btn" onClick={onNotImplemented}>🎤</button>
          <button className="action-btn" onClick={onNotImplemented}>📷</button>
        </div>
        <button 
          onClick={onSendPost}
          className={`send-btn ${isSending ? 'sending' : ''}`}
          disabled={!newPost.trim() || isSending}
        >
          {isSending ? '⏳' : '✈️'}
        </button>
      </div>
    </div>
  );
};

export default PostCreationForm;
