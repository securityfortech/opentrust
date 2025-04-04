
import React from 'react';
import CertificationCard from '@/components/trust/CertificationCard';

// Certification data
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

const CertificationsTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default CertificationsTab;
