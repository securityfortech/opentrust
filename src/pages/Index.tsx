
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Maximize2, Shield, FileText, Search } from 'lucide-react';
import ComplianceBadge from '@/components/trust/ComplianceBadge';
import { Input } from '@/components/ui/input';

// Company logos for "trusted by" section
const companies = [
  { name: 'Morgan Stanley', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'PwC', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Robinhood', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Square', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Zendesk', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Amgen', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Bain & Company', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Datadog', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'JetBlue Airways', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'University of Oxford', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
  { name: 'Moderna', logo: '/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png' },
];

const Index = () => {
  return (
    <Layout fullWidth>
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Start your security review</h2>
              <p className="text-gray-600 mt-1">View & download sensitive information</p>
            </div>
            <Button className="mt-4 md:mt-0" size="lg">
              <Shield className="mr-2 h-4 w-4" /> Get access
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-11 py-6 bg-white" 
              placeholder="Search items"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card className="border border-gray-200">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-xl font-bold flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Overview
                </CardTitle>
              </div>
              <Button variant="ghost" size="icon">
                <Maximize2 className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Welcome to our Trust Portal. Here, you can access our comprehensive compliance documentation,
                find answers to frequently asked questions related to security and privacy, and explore our robust security practices. 
                We believe in maintaining transparency and building trust with our customers, and this portal is designed 
                to provide you with the information and assurance you need to feel confident in our ability to protect your data.
              </p>
              
              <p className="mb-6">
                Our products are covered in our SOC 2 Type 2 report and have been evaluated by an independent third-party auditor 
                to confirm that our controls align with industry standards for security and confidentiality. Request access to our 
                SOC 2 Report below to learn more about our security controls and compliance activities.
              </p>
              
              <p className="mb-6">
                We invite security researchers, ethical hackers, and technology enthusiasts to report security issues via our Bug Bounty Program. 
                The program offers safe harbor for good faith security testing and cash rewards for vulnerabilities based on 
                their severity and impact.
              </p>
              
              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <Link to="/contact">Request Reports</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#">Bug Bounty Program</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Compliance
                </CardTitle>
              </div>
              <Button variant="ghost" size="icon">
                <Maximize2 className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="CCPA" className="w-16 h-16" />} 
                  name="CCPA" 
                />
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="CSA STAR" className="w-16 h-16" />} 
                  name="CSA STAR" 
                />
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="GDPR" className="w-16 h-16" />} 
                  name="GDPR" 
                />
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="SOC 2" className="w-16 h-16" />} 
                  name="SOC 2" 
                />
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="SOC 3" className="w-16 h-16" />} 
                  name="SOC 3" 
                />
                <ComplianceBadge 
                  icon={<img src="/lovable-uploads/6d4de721-77e3-4d5f-aee6-9069ce62848a.png" alt="TX-RAMP" className="w-16 h-16" />} 
                  name="TX-RAMP" 
                />
              </div>
              
              <div className="mt-auto">
                <Button asChild>
                  <Link to="/compliance">View All Certifications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-10">Our Company is trusted by</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-16 h-16 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
