
import React from 'react';
import Layout from '@/components/layout/Layout';
import CertificationCard from '@/components/trust/CertificationCard';

const certifications = [
  {
    title: 'SOC 2 Type II',
    description: 'Service Organization Control (SOC) 2 Type II examination validates our controls relevant to security, availability, and confidentiality.',
    issueDate: 'June 15, 2023',
    expiryDate: 'June 14, 2024',
    status: 'active' as const,
    documentUrl: '#soc2'
  },
  {
    title: 'ISO 27001',
    description: 'ISO 27001 certification confirms our implementation of an information security management system (ISMS) that meets international standards.',
    issueDate: 'August 20, 2023',
    expiryDate: 'August 19, 2026',
    status: 'active' as const,
    documentUrl: '#iso27001'
  },
  {
    title: 'GDPR Compliance',
    description: 'We maintain compliance with the General Data Protection Regulation (GDPR) for processing and storing personal data of EU citizens.',
    issueDate: 'January 5, 2023',
    expiryDate: 'January 4, 2024',
    status: 'active' as const,
    documentUrl: '#gdpr'
  },
  {
    title: 'HIPAA Compliance',
    description: 'We maintain compliance with the Health Insurance Portability and Accountability Act (HIPAA) for handling protected health information.',
    issueDate: 'March 12, 2023',
    expiryDate: 'March 11, 2024',
    status: 'active' as const,
    documentUrl: '#hipaa'
  },
  {
    title: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard (PCI DSS) compliance for securely processing credit card information.',
    issueDate: 'October 5, 2023',
    expiryDate: 'October 4, 2024',
    status: 'active' as const,
    documentUrl: '#pcidss'
  },
  {
    title: 'CCPA Compliance',
    description: 'California Consumer Privacy Act (CCPA) compliance for protecting the privacy rights of California residents.',
    issueDate: 'February 15, 2023',
    expiryDate: 'February 14, 2024',
    status: 'active' as const,
    documentUrl: '#ccpa'
  }
];

const Compliance = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Compliance Certifications</h1>
        
        <p className="mb-8 text-lg text-trust-secondary">
          We maintain compliance with industry standards and regulations to ensure the security, 
          privacy, and reliability of our services. Our certifications reflect our commitment to 
          maintaining the highest levels of security and compliance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              description={cert.description}
              issueDate={cert.issueDate}
              expiryDate={cert.expiryDate}
              status={cert.status}
              documentUrl={cert.documentUrl}
            />
          ))}
        </div>
        
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
      </div>
    </Layout>
  );
};

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default Compliance;
