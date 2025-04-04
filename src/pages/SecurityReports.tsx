
import React from 'react';
import Layout from '@/components/layout/Layout';
import SecurityReportCard from '@/components/trust/SecurityReportCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const reports = {
  penetrationTests: [
    {
      title: 'Annual Web Application Penetration Test',
      description: 'Comprehensive penetration test of our web application to identify security vulnerabilities.',
      date: 'October 15, 2023',
      category: 'penetration-test' as const,
      documentUrl: '#report1'
    },
    {
      title: 'API Security Assessment',
      description: 'Security assessment of our public and internal APIs to identify potential security risks.',
      date: 'August 5, 2023',
      category: 'penetration-test' as const,
      documentUrl: '#report2'
    },
    {
      title: 'Mobile Application Penetration Test',
      description: 'Security testing of our iOS and Android mobile applications.',
      date: 'July 10, 2023',
      category: 'penetration-test' as const,
      documentUrl: '#report3'
    }
  ],
  vulnerabilityAssessments: [
    {
      title: 'Infrastructure Vulnerability Assessment',
      description: 'Comprehensive assessment of our cloud infrastructure security posture.',
      date: 'September 20, 2023',
      category: 'vulnerability-assessment' as const,
      documentUrl: '#report4'
    },
    {
      title: 'Network Security Assessment',
      description: 'Assessment of network security controls and configurations.',
      date: 'June 8, 2023',
      category: 'vulnerability-assessment' as const,
      documentUrl: '#report5'
    }
  ],
  audits: [
    {
      title: 'Annual Security Control Audit',
      description: 'Review of security controls against industry best practices and compliance requirements.',
      date: 'November 5, 2023',
      category: 'audit' as const,
      documentUrl: '#report6'
    },
    {
      title: 'Access Control Audit',
      description: 'Audit of access control mechanisms and user permissions across our systems.',
      date: 'May 15, 2023',
      category: 'audit' as const,
      documentUrl: '#report7'
    },
    {
      title: 'Data Protection Audit',
      description: 'Review of data protection measures and compliance with data protection regulations.',
      date: 'February 22, 2023',
      category: 'audit' as const,
      documentUrl: '#report8'
    }
  ]
};

const SecurityReports = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Security Reports</h1>
        
        <p className="mb-8 text-lg text-trust-secondary">
          We regularly conduct security assessments, penetration tests, and audits to evaluate 
          and enhance our security posture. Below are summaries of recent security reports.
        </p>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pentest">Penetration Tests</TabsTrigger>
            <TabsTrigger value="vuln">Vulnerability Assessments</TabsTrigger>
            <TabsTrigger value="audit">Audits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ...reports.penetrationTests,
                ...reports.vulnerabilityAssessments,
                ...reports.audits
              ].map((report, index) => (
                <SecurityReportCard
                  key={index}
                  title={report.title}
                  description={report.description}
                  date={report.date}
                  category={report.category}
                  documentUrl={report.documentUrl}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pentest">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.penetrationTests.map((report, index) => (
                <SecurityReportCard
                  key={index}
                  title={report.title}
                  description={report.description}
                  date={report.date}
                  category={report.category}
                  documentUrl={report.documentUrl}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vuln">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.vulnerabilityAssessments.map((report, index) => (
                <SecurityReportCard
                  key={index}
                  title={report.title}
                  description={report.description}
                  date={report.date}
                  category={report.category}
                  documentUrl={report.documentUrl}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="audit">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.audits.map((report, index) => (
                <SecurityReportCard
                  key={index}
                  title={report.title}
                  description={report.description}
                  date={report.date}
                  category={report.category}
                  documentUrl={report.documentUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Request Additional Security Reports</h2>
          <p className="mb-4">
            Need a specific security report or have questions about our security testing? 
            Our security team is available to provide more information.
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

export default SecurityReports;
