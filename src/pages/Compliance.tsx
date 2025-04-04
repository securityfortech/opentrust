
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CertificationsTab from '@/components/compliance/CertificationsTab';
import SecurityControlsTab from '@/components/compliance/SecurityControlsTab';
import PrivacyTab from '@/components/compliance/PrivacyTab';
import ComplianceContactInfo from '@/components/compliance/ComplianceContactInfo';

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
          
          <TabsContent value="certifications">
            <CertificationsTab />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityControlsTab />
          </TabsContent>
          
          <TabsContent value="privacy">
            <PrivacyTab />
          </TabsContent>
        </Tabs>
        
        <ComplianceContactInfo />
      </div>
    </Layout>
  );
};

export default Compliance;
