import React from 'react';
import djangoCert from '../img/django_cert.jpeg';
import '../css/certifications.css';

const certifications = [
    {
        name: 'Python/Django ile Web Programlama',
        issuer: '9. Ozgur Yazilim Yaz Kampi',
        issuedOn: '2018-08-04',
        credentialUrl: djangoCert
    }
];

const sortedCertifications = [...certifications].sort(
    (a, b) => new Date(b.issuedOn) - new Date(a.issuedOn)
);

export default function Certifications() {
    return (
        <section className="certifications-page" aria-label="Certifications">
            <h1 className="certifications-title">Certifications</h1>
            <ol className="certification-list">
                {sortedCertifications.map((certification) => (
                    <li key={`${certification.name}-${certification.issuedOn}`} className="certification-item">
                        <h2 className="certification-name">{certification.name}</h2>
                        <p className="certification-meta">
                            {certification.issuer} | {new Date(certification.issuedOn).getFullYear()}
                        </p>
                        <a
                            className="certification-link hvr-underline-from-left"
                            href={certification.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View certificate image
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}