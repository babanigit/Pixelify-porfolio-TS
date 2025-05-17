export interface CertificateDataType {
    title: string; // Full certificate name
    category: string; // Domain or area of certification
    description: string[]; // Key learning points (multi-line support)
    certificateUrl: string; // Public link to view the certificate
    credentialUrl?: string; // Optional verification URL
    organization: string; // Issuer name (e.g., Google, Coursera)
    logo: string; // Path to logo image file
    dateIssued: string; // e.g., "March 2024"
    skills: string[]; // Relevant skills gained
    duration?: string; // e.g., "8 weeks", optional
    verificationId?: string; // Unique ID, optional
  }
  