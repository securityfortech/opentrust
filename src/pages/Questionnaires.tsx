
import React from 'react';
import Layout from '@/components/layout/Layout';
import QuestionnaireCard from '@/components/trust/QuestionnaireCard';

const questionnaires = [
  {
    title: 'Consensus Assessment Initiative Questionnaire (CAIQ)',
    description: 'Standardized security questionnaire provided by the Cloud Security Alliance (CSA).',
    lastUpdated: 'November 10, 2023',
    format: 'caiq' as const,
    downloadUrl: '#caiq'
  },
  {
    title: 'SOC 2 Security Questionnaire',
    description: 'Detailed questionnaire covering our SOC 2 controls and implementation.',
    lastUpdated: 'October 5, 2023',
    format: 'soc2' as const,
    downloadUrl: '#soc2'
  },
  {
    title: 'ISO 27001 Controls Questionnaire',
    description: 'Questionnaire detailing our implementation of ISO 27001 controls.',
    lastUpdated: 'September 15, 2023',
    format: 'iso27001' as const,
    downloadUrl: '#iso27001'
  },
  {
    title: 'GDPR Compliance Questionnaire',
    description: 'Questionnaire covering our GDPR compliance measures and data protection practices.',
    lastUpdated: 'August 20, 2023',
    format: 'gdpr' as const,
    downloadUrl: '#gdpr'
  },
  {
    title: 'HIPAA Security Assessment',
    description: 'Assessment of our compliance with HIPAA security and privacy rules.',
    lastUpdated: 'July 8, 2023',
    format: 'hipaa' as const,
    downloadUrl: '#hipaa'
  },
  {
    title: 'Custom Security Questionnaire',
    description: 'Request a custom security questionnaire tailored to your specific requirements.',
    lastUpdated: 'Updated upon request',
    format: 'custom' as const,
    requestUrl: '/contact'
  }
];

const Questionnaires = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Security Questionnaires</h1>
        
        <p className="mb-8 text-lg text-trust-secondary">
          We provide pre-filled security questionnaires to help streamline your vendor security assessment 
          process. Download standardized questionnaires below or request a custom one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {questionnaires.map((questionnaire, index) => (
            <QuestionnaireCard
              key={index}
              title={questionnaire.title}
              description={questionnaire.description}
              lastUpdated={questionnaire.lastUpdated}
              format={questionnaire.format}
              downloadUrl={questionnaire.downloadUrl}
              requestUrl={questionnaire.requestUrl}
            />
          ))}
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Need a Different Format?</h2>
          <p className="mb-4">
            If you require a security questionnaire in a specific format or have additional security questions, 
            please contact our security team. We're happy to assist with your security assessment needs.
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

export default Questionnaires;
