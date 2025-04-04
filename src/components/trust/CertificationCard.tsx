
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  description: string;
  issueDate: string;
  expiryDate: string;
  status: 'active' | 'pending' | 'expired';
  documentUrl?: string;
}

const CertificationCard = ({
  title,
  description,
  issueDate,
  expiryDate,
  status,
  documentUrl,
}: CertificationCardProps) => {
  const statusVariant = {
    active: 'bg-green-100 text-green-800 hover:bg-green-200',
    pending: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    expired: 'bg-red-100 text-red-800 hover:bg-red-200',
  };

  return (
    <Card className="trust-card h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={statusVariant[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <CardDescription className="text-sm text-trust-secondary mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Issued</p>
            <p className="font-medium">{issueDate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Expires</p>
            <p className="font-medium">{expiryDate}</p>
          </div>
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
              <span>View Certificate</span>
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CertificationCard;
