
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CertificationCard from '@/components/trust/CertificationCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

// Security controls data
const securityControls = [
  { category: 'Access Control', control: 'Multi-factor authentication for all administrative access', status: 'Implemented' },
  { category: 'Access Control', control: 'Role-based access control (RBAC)', status: 'Implemented' },
  { category: 'Access Control', control: 'Regular access reviews', status: 'Implemented' },
  { category: 'Encryption', control: 'Data encryption at rest', status: 'Implemented' },
  { category: 'Encryption', control: 'Data encryption in transit (TLS 1.3)', status: 'Implemented' },
  { category: 'Network Security', control: 'Web Application Firewall (WAF)', status: 'Implemented' },
  { category: 'Network Security', control: 'Intrusion Detection System (IDS)', status: 'Implemented' },
  { category: 'Network Security', control: 'Regular vulnerability scanning', status: 'Implemented' },
  { category: 'Monitoring', control: 'Centralized log management', status: 'Implemented' },
  { category: 'Monitoring', control: 'Real-time security event monitoring', status: 'Implemented' },
  { category: 'Incident Response', control: 'Documented incident response plan', status: 'Implemented' },
  { category: 'Incident Response', control: 'Regular incident response drills', status: 'Implemented' }
];

// Privacy policies
const privacyFaqs = [
  {
    question: 'What personal data do you collect?',
    answer: 'We collect information that you provide directly to us, such as your name, email address, and any other information you choose to provide. We also collect information automatically when you use our services, including log data, device information, and cookies.'
  },
  {
    question: 'How do you use personal data?',
    answer: 'We use personal data to provide and improve our services, communicate with you, personalize your experience, and comply with legal obligations. We may also use your data for analytics and research purposes to better understand how users interact with our services.'
  },
  {
    question: 'How long do you retain personal data?',
    answer: 'We retain personal data for as long as necessary to fulfill the purposes outlined in our privacy policy, unless a longer retention period is required or permitted by law. When determining how long to retain data, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, and legal requirements.'
  },
  {
    question: 'How do you protect personal data?',
    answer: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security assessments, and employee training on privacy and security practices.'
  },
  {
    question: 'What are my data protection rights?',
    answer: 'Depending on your location, you may have the right to access, correct, update, or request deletion of your personal data. You may also have the right to object to processing, ask us to restrict processing, or request portability of your data. If we have collected and processed your data with your consent, you can withdraw your consent at any time.'
  }
];

const Compliance = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  return (
    <Layout>
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Trust & Compliance Center</h1>
        
        <p className="mb-8 text-lg text-trust-secondary">
          We maintain compliance with industry standards and regulations to ensure the security, 
          privacy, and reliability of our services. This page provides a comprehensive overview of our 
          compliance posture, security controls, and privacy practices.
        </p>
        
        <Tabs 
          defaultValue="certifications" 
          className="mb-10"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="security">Security Controls</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="certifications" className="space-y-8">
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
          </TabsContent>
          
          <TabsContent value="security">
            <div className="bg-white rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Category</TableHead>
                    <TableHead>Security Control</TableHead>
                    <TableHead className="text-right w-[150px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securityControls.map((control, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{control.category}</TableCell>
                      <TableCell>{control.control}</TableCell>
                      <TableCell className="text-right">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {control.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policies & FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {privacyFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Data Protection Officer</h3>
              <p className="mb-4">
                If you have any questions about our privacy practices or would like to exercise your data protection rights, 
                please contact our Data Protection Officer:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/contact">Contact DPO</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#privacy-policy">View Full Privacy Policy</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
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

export default Compliance;
