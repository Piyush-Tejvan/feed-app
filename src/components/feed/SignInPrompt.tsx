import * as React from 'react';
import { SignInPromptProps } from '../../types';
import { MESSAGES } from '../../constants';

const SignInPrompt: React.FC<SignInPromptProps> = ({ onSignIn, onSignUp }) => {
  return (
    <div className="sign-in-prompt">
      <div className="prompt-content">
        <h3>{MESSAGES.WELCOME_TITLE}</h3>
        <p>{MESSAGES.WELCOME_DESCRIPTION}</p>
        <div className="prompt-actions">
          <button className="sign-in-btn" onClick={onSignIn}>
            Sign In
          </button>
          <button className="sign-up-btn" onClick={onSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPrompt;
