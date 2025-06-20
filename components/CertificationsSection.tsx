
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { CERTIFICATIONS_DATA } from '../constants'; 
import type { Certification } from '../types';

interface CertificationItemProps {
  certification: Certification;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certification }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-200">
    <h3 className="text-lg font-semibold text-orange-600 mb-1 flex-grow">{certification.name}</h3>
    <p className="text-md text-slate-700 mb-1">{certification.issuingOrganization}</p>
    {certification.dateIssued && <p className="text-sm text-slate-500 mb-3">Issued: {certification.dateIssued}</p>}
    {certification.credentialId && (
      <p className="text-xs text-slate-500 mb-1">Credential ID: {certification.credentialId}</p>
    )}
    {/* Removed View Credential link and related conditional text */}
  </div>
);

interface CertificationsSectionProps {
  id: string;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Certifications" className="bg-slate-50">
      {CERTIFICATIONS_DATA.length > 0 ? (
        <div className="space-y-8 max-w-3xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <CertificationItem key={cert.id} certification={cert} />
          ))}
        </div>
      ) : (
         <p className="text-center text-slate-600">No certifications listed yet.</p>
       )}
    </SectionWrapper>
  );
};