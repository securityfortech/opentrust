
import React, { useState } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  showContactButton?: boolean;
  fullWidth?: boolean;
}

const Layout = ({ children, showContactButton = true, fullWidth = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      <Header showContactButton={showContactButton} />
      
      <main className={`flex-1 py-8 ${fullWidth ? 'px-0' : 'px-4 container mx-auto max-w-7xl'}`}>
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-6 text-sm text-center text-gray-500">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
