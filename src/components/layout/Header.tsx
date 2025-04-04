
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

interface HeaderProps {
  showContactButton?: boolean;
}

const Header = ({ showContactButton = true }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-trust-accent" />
          <span className="text-lg font-semibold text-trust-primary hidden md:inline-block">Security & Trust</span>
        </div>
        
        {showContactButton && (
          <Button variant="default" size="sm" asChild>
            <a href="/contact">Contact Security Team</a>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
