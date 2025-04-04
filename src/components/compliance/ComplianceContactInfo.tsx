
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ComplianceContactInfo = () => {
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Request Additional Compliance Information</h2>
      <p className="mb-4">
        Need more information about our compliance certifications or have specific compliance 
        requirements? Our security team is ready to assist.
      </p>
      <Button asChild>
        <Link to="/contact">Contact Security Team</Link>
      </Button>
    </div>
  );
};

export default ComplianceContactInfo;
