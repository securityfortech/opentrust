
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { ArrowRight, FileText, Shield, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const securityFeatures = [
  {
    title: 'Compliance Certifications',
    description: 'View our industry-standard compliance certifications including SOC 2, ISO 27001, and more.',
    icon: <Shield className="text-trust-accent w-12 h-12" />,
    link: '/compliance'
  },
  {
    title: 'Security Reports',
    description: 'Access our penetration test reports, vulnerability assessments, and security audit results.',
    icon: <FileText className="text-trust-accent w-12 h-12" />,
    link: '/security-reports'
  },
  {
    title: 'Security Questionnaires',
    description: 'Download pre-filled security questionnaires or request custom information for your compliance needs.',
    icon: <Users className="text-trust-accent w-12 h-12" />,
    link: '/questionnaires'
  },
  {
    title: 'Security Engagements',
    description: 'Learn about our ongoing and planned security engagements with third-party security firms.',
    icon: <Calendar className="text-trust-accent w-12 h-12" />,
    link: '/engagements'
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="page-container">
        {/* Hero Section */}
        <section className="mb-12 text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-trust-primary">
            Our Commitment to Security & Trust
          </h1>
          <p className="text-xl text-trust-secondary max-w-3xl mx-auto mb-8">
            We prioritize the security and privacy of your data. Explore our compliance certifications, 
            security reports, and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/compliance">
                View Compliance
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contact Security Team
              </Link>
            </Button>
          </div>
        </section>

        {/* Security Highlights */}
        <section className="mb-12">
          <h2 className="section-heading text-center">Security & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="trust-card h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-center pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={feature.link} className="flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Security Overview */}
        <section className="mb-12">
          <h2 className="section-heading">Our Security Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="section-subheading">Infrastructure Security</h3>
              <p className="mb-4">
                Our infrastructure is hosted in SOC 2 compliant data centers, utilizing encryption at rest and in transit, 
                with regular security assessments and penetration testing to identify and remediate vulnerabilities.
              </p>
              <h3 className="section-subheading">Application Security</h3>
              <p>
                We employ secure development practices, conduct regular code reviews, and perform automated 
                security testing for all applications. Our team adheres to OWASP guidelines to protect against 
                common web vulnerabilities.
              </p>
            </div>
            <div>
              <h3 className="section-subheading">Data Protection</h3>
              <p className="mb-4">
                All customer data is encrypted both in transit and at rest. We implement strict access controls, 
                regularly audit access logs, and maintain data segregation to ensure the confidentiality and 
                integrity of your information.
              </p>
              <h3 className="section-subheading">Security Operations</h3>
              <p>
                Our security team continuously monitors for threats, conducts regular vulnerability scans, and 
                maintains incident response procedures to rapidly address any security events.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
