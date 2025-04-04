
import React from 'react';
import { cn } from '@/lib/utils';

interface ComplianceBadgeProps {
  icon: React.ReactNode;
  name: string;
  active?: boolean;
  className?: string;
}

const ComplianceBadge = ({ icon, name, active = true, className }: ComplianceBadgeProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          {icon}
        </div>
        {active && (
          <div className="absolute -bottom-1 -left-1 flex items-center gap-1 text-green-600">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium">{name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplianceBadge;
