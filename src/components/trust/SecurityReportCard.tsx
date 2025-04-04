
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText } from 'lucide-react';

interface SecurityReportCardProps {
  title: string;
  description: string;
  date: string;
  category: 'penetration-test' | 'vulnerability-assessment' | 'audit' | 'other';
  documentUrl?: string;
}

const SecurityReportCard = ({
  title,
  description,
  date,
  category,
  documentUrl,
}: SecurityReportCardProps) => {
  const categoryLabels = {
    'penetration-test': 'Penetration Test',
    'vulnerability-assessment': 'Vulnerability Assessment',
    'audit': 'Security Audit',
    'other': 'Security Report'
  };

  const categoryColors = {
    'penetration-test': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'vulnerability-assessment': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'audit': 'bg-green-100 text-green-800 hover:bg-green-200',
    'other': 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  return (
    <Card className="trust-card h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={categoryColors[category]}>
            {categoryLabels[category]}
          </Badge>
        </div>
        <CardDescription className="text-sm text-trust-secondary mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardContent>
      {documentUrl && (
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full flex gap-2 items-center" 
            asChild
          >
            <a href={documentUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              <span>View Report</span>
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default SecurityReportCard;
