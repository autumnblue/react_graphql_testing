import React from 'react';

type Props = {
  text: string;
  visible: boolean;
};

export const Warning: React.FC<Props> = ({ text, visible }) => {
  if (!visible) return null;

  return (
    <div className="alert alert__warning">
      <span>{text}</span>
    </div>
  );
};
