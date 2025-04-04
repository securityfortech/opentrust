
import React from 'react';
import Layout from '@/components/layout/Layout';
import EngagementCard from '@/components/trust/EngagementCard';

const engagements = [
  {
    title: 'Annual External Penetration Test',
    description: 'Comprehensive penetration test of our production environment by an independent security firm.',
    vendor: 'SecureWorks',
    date: 'April 15-30, 2024',
    status: 'scheduled' as const,
    type: 'penetration-test' as const,
    detailsUrl: '#engagement1'
  },
  {
    title: 'Cloud Security Assessment',
    description: 'Assessment of our cloud infrastructure security configurations and controls.',
    vendor: 'Cloud Security Partners',
    date: 'February 10-28, 2024',
    status: 'in-progress' as const,
    type: 'security-audit' as const,
    detailsUrl: '#engagement2'
  },
  {
    title: 'Mobile Application Security Review',
    description: 'Security review of our iOS and Android mobile applications.',
    vendor: 'NCC Group',
    date: 'January 5-26, 2024',
    status: 'completed' as const,
    type: 'penetration-test' as const,
    detailsUrl: '#engagement3'
  },
  {
    title: 'SOC 2 Type II Audit',
    description: 'Annual SOC 2 Type II audit of our security controls.',
    vendor: 'Deloitte',
    date: 'December 1, 2023 - January 31, 2024',
    status: 'completed' as const,
    type: 'compliance-assessment' as const,
    detailsUrl: '#engagement4'
  },
  {
    title: 'API Security Assessment',
    description: 'Security assessment of our public and internal APIs.',
    vendor: 'Bishop Fox',
    date: 'November 10-30, 2023',
    status: 'completed' as const,
    type: 'penetration-test' as const,
    detailsUrl: '#engagement5'
  },
  {
    title: 'GDPR Compliance Review',
    description: 'Review of our GDPR compliance measures and data protection practices.',
    vendor: 'Privacy Compliance Ltd',
    date: 'October 5-25, 2023',
    status: 'completed' as const,
    type: 'compliance-assessment' as const,
    detailsUrl: '#engagement6'
  }
];

const Engagements = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Security Engagements</h1>
        
        <p className="mb-8 text-lg text-trust-secondary">
          We regularly engage with third-party security firms to assess and enhance our security posture. 
          Below are our recent and upcoming security engagements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={index}
              title={engagement.title}
              description={engagement.description}
              vendor={engagement.vendor}
              date={engagement.date}
              status={engagement.status}
              type={engagement.type}
              detailsUrl={engagement.detailsUrl}
            />
          ))}
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Our Security Testing Approach</h2>
          <p className="mb-4">
            We conduct regular security assessments and engage with independent security firms to validate 
            our security controls. Our security testing program includes:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Annual external penetration tests</li>
            <li>Quarterly vulnerability assessments</li>
            <li>Regular code security reviews</li>
            <li>Automated security scanning in our CI/CD pipeline</li>
            <li>Security design reviews for new features</li>
          </ul>
          <p className="mb-4">
            For more information about our security testing approach or to discuss specific security concerns, 
            please contact our security team.
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

export default Engagements;
