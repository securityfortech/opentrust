
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, FileText, Users, Calendar, Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const SidebarLink = ({ to, icon, children, onClick }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2 px-4 py-3 rounded-md transition-colors",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
        )
      }
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar h-screen fixed lg:sticky top-0 left-0 z-30",
          "flex flex-col w-[250px] transition-transform duration-300 ease-in-out",
          "border-r border-sidebar-border",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground">Trust Center</h1>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 py-4 space-y-1 px-2">
          <SidebarLink to="/" icon={<Home className="w-5 h-5" />} onClick={toggleSidebar}>
            Home
          </SidebarLink>
          <SidebarLink to="/compliance" icon={<Shield className="w-5 h-5" />} onClick={toggleSidebar}>
            Compliance
          </SidebarLink>
          <SidebarLink to="/security-reports" icon={<FileText className="w-5 h-5" />} onClick={toggleSidebar}>
            Security Reports
          </SidebarLink>
          <SidebarLink to="/questionnaires" icon={<Users className="w-5 h-5" />} onClick={toggleSidebar}>
            Questionnaires
          </SidebarLink>
          <SidebarLink to="/engagements" icon={<Calendar className="w-5 h-5" />} onClick={toggleSidebar}>
            Engagements
          </SidebarLink>
        </nav>

        <div className="p-4 mt-auto border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/70">
            © {new Date().getFullYear()} Your Company
          </p>
        </div>
      </aside>
      
      {/* Mobile menu button */}
      <Button 
        variant="outline" 
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-lg z-10 lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>
    </>
  );
};

export default Sidebar;
