import React from 'react';

export default function PaperCard({
  children,
  paperType = 'sheet',
  padding = '1.75rem',
  className = '',
  style = {},
  onClick
}) {
  const getBgColor = () => {
    switch (paperType) {
      case 'cream':
        return 'var(--color-paper-cream)';
      case 'sand':
        return '#F5F2EB';
      case 'kraft':
        return '#EFEAE0';
      default:
        return 'var(--color-paper-sheet)';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`card ${className}`}
      style={{
        position: 'relative',
        backgroundColor: getBgColor(),
        border: '1px solid var(--color-border)',
        borderRadius: '6px',
        padding,
        boxShadow: 'var(--shadow-paper)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        ...style
      }}
    >
      {children}
    </div>
  );
}

