import * as React from 'react';
import { ToolbarProps } from '../../types';

const Toolbar: React.FC<ToolbarProps> = ({ onNotImplemented }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <select className="format-dropdown" onClick={onNotImplemented}>
          <option>Paragraph</option>
        </select>
        <button className="toolbar-btn" onClick={onNotImplemented}>B</button>
        <button className="toolbar-btn" onClick={onNotImplemented}>I</button>
        <button className="toolbar-btn" onClick={onNotImplemented}>U</button>
        <button className="toolbar-btn" onClick={onNotImplemented}>•</button>
        <button className="toolbar-btn" onClick={onNotImplemented}>1.</button>
      </div>
      <div className="toolbar-right">
        <span className="char-count">99</span>
        <button className="toolbar-btn code-btn" onClick={onNotImplemented}>&lt;/&gt;</button>
        <button className="toolbar-btn delete-btn" onClick={onNotImplemented}>🗑️</button>
      </div>
    </div>
  );
};

export default Toolbar;
