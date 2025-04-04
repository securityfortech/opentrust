
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/trust/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Globe, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout showContactButton={false}>
      <div className="page-container">
        <h1 className="section-heading">Contact Our Security Team</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-trust-accent" />
                  <span>Security Team</span>
                </CardTitle>
                <CardDescription>
                  Our dedicated security team is available to address your security concerns and questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-trust-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-trust-secondary">security@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-trust-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Security Portal</p>
                    <p className="text-trust-secondary">security.yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-trust-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-trust-secondary">We typically respond to security inquiries within 24 hours.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="trust-card">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common security questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">How can I report a security vulnerability?</h3>
                  <p className="text-trust-secondary">
                    Please email details to security@yourcompany.com or use our secure vulnerability reporting form.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Where can I find your security policies?</h3>
                  <p className="text-trust-secondary">
                    Our security policies are available to customers in our customer portal or upon request.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Do you have a bug bounty program?</h3>
                  <p className="text-trust-secondary">
                    Yes, we operate a private bug bounty program. Please contact us for more information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">How do you handle security incidents?</h3>
                  <p className="text-trust-secondary">
                    We have a documented incident response process. Details are available in our security documentation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
