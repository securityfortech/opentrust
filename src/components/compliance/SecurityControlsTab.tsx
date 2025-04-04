
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

const SecurityControlsTab = () => {
  return (
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
  );
};

export default SecurityControlsTab;
