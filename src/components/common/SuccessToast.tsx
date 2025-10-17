import * as React from 'react';

interface SuccessToastProps {
  show: boolean;
  message: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="success-toast">
      ✅ {message}
    </div>
  );
};

export default SuccessToast;
