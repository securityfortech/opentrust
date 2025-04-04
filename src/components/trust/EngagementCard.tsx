
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';

interface EngagementCardProps {
  title: string;
  description: string;
  vendor: string;
  date: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  type: 'penetration-test' | 'security-audit' | 'compliance-assessment' | 'other';
  detailsUrl?: string;
}

const EngagementCard = ({
  title,
  description,
  vendor,
  date,
  status,
  type,
  detailsUrl,
}: EngagementCardProps) => {
  const statusColors = {
    'scheduled': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'completed': 'bg-green-100 text-green-800 hover:bg-green-200',
    'cancelled': 'bg-red-100 text-red-800 hover:bg-red-200',
  };

  const typeLabels = {
    'penetration-test': 'Penetration Test',
    'security-audit': 'Security Audit',
    'compliance-assessment': 'Compliance Assessment',
    'other': 'Security Engagement'
  };

  return (
    <Card className="trust-card h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={statusColors[status]}>
            {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>
        </div>
        <CardDescription className="text-sm text-trust-secondary mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>{vendor}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Type: </span>
          <span>{typeLabels[type]}</span>
        </div>
      </CardContent>
      {detailsUrl && (
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full" 
            asChild
          >
            <a href={detailsUrl}>View Details</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default EngagementCard;
