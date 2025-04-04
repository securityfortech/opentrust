
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const PrivacyTab = () => {
  return (
    <>
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
    </>
  );
};

export default PrivacyTab;
