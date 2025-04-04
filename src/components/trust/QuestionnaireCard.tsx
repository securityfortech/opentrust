
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, ExternalLink } from 'lucide-react';

interface QuestionnaireCardProps {
  title: string;
  description: string;
  lastUpdated: string;
  format: 'caiq' | 'soc2' | 'iso27001' | 'hipaa' | 'gdpr' | 'custom';
  downloadUrl?: string;
  requestUrl?: string;
}

const QuestionnaireCard = ({
  title,
  description,
  lastUpdated,
  format,
  downloadUrl,
  requestUrl,
}: QuestionnaireCardProps) => {
  const formatLabels = {
    'caiq': 'CAIQ',
    'soc2': 'SOC 2',
    'iso27001': 'ISO 27001',
    'hipaa': 'HIPAA',
    'gdpr': 'GDPR',
    'custom': 'Custom'
  };

  const formatColors = {
    'caiq': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    'soc2': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'iso27001': 'bg-green-100 text-green-800 hover:bg-green-200',
    'hipaa': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'gdpr': 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    'custom': 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  return (
    <Card className="trust-card h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={formatColors[format]}>
            {formatLabels[format]}
          </Badge>
        </div>
        <CardDescription className="text-sm text-trust-secondary mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 w-full">
        {downloadUrl && (
          <Button 
            variant="default" 
            className="flex gap-2 items-center w-full" 
            asChild
          >
            <a href={downloadUrl} download>
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </Button>
        )}
        {requestUrl && (
          <Button 
            variant="outline" 
            className="flex gap-2 items-center w-full" 
            asChild
          >
            <a href={requestUrl}>
              <ExternalLink className="h-4 w-4" />
              <span>Request</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuestionnaireCard;
