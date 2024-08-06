import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-radial-gradient overflow-auto">
      <div className="h-max container mx-auto py-12">{children}</div>
    </div>
  );
};
