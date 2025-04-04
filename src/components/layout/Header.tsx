
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Share, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  showContactButton?: boolean;
}

const Header = ({ showContactButton = true }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-black" />
            <span className="text-xl font-semibold text-black">Trust Portal</span>
          </Link>
          
          <div className="hidden md:flex items-center">
            <Button variant="ghost" className="font-medium text-base">
              Business Products <span className="ml-1">▼</span>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Share className="mr-2 h-4 w-4" /> Share
          </Button>
          
          <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
            <Bell className="mr-2 h-4 w-4" /> Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
