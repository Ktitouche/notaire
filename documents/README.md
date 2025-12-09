# Documents Folder

This folder is intended to store downloadable PDF documents that clients can access from the website.

## Suggested Documents to Add

### 1. Information Guides
- **guide-acheteur-immobilier.pdf** - Real estate buyer's guide
- **guide-succession.pdf** - Inheritance and succession guide
- **guide-donation.pdf** - Gift and donation guide
- **guide-mariage-pacs.pdf** - Marriage and PACS guide

### 2. Forms and Templates
- **formulaire-contact.pdf** - Contact form (printable version)
- **checklist-documents-immobilier.pdf** - Document checklist for real estate
- **checklist-succession.pdf** - Document checklist for inheritance

### 3. Fee Schedules
- **tarifs-notaire.pdf** - Notary fee schedule
- **frais-acquisition-immobiliere.pdf** - Real estate acquisition costs breakdown

### 4. Legal Information
- **mentions-legales.pdf** - Legal notices
- **politique-confidentialite.pdf** - Privacy policy
- **conditions-generales.pdf** - General terms and conditions

### 5. Educational Materials
- **faq-notaire.pdf** - Frequently asked questions
- **lexique-juridique.pdf** - Legal terminology glossary
- **actualites-juridiques.pdf** - Legal news and updates

## Document Guidelines

### Format
- Save all documents as PDF
- Use PDF/A format for long-term archiving
- Ensure PDFs are searchable (not scanned images without OCR)

### Naming Convention
Use descriptive French names with hyphens:
- ✅ `guide-acheteur-immobilier.pdf`
- ✅ `tarifs-2024.pdf`
- ❌ `document1.pdf`
- ❌ `DOC_FINAL_V3.pdf`

### File Size
- Target: < 5MB per document
- Compress images within PDFs
- Use appropriate DPI (150-300 for print, 72-150 for web)

### Security
- Remove metadata if sensitive
- Consider password protection for client-specific documents
- Use watermarks if necessary

### Accessibility
- Include bookmarks for navigation
- Use proper heading structure
- Ensure text is selectable
- Add alt text to images within PDFs
- Use sufficient color contrast

### Version Control
- Include version number or date in filename: `guide-succession-2024.pdf`
- Keep only the most recent version on the website
- Archive old versions separately

## Adding Documents to Website

To link documents from your HTML pages:

```html
<!-- In HTML -->
<a href="documents/guide-acheteur-immobilier.pdf" download>
    Télécharger le Guide
</a>
```

Or update the JavaScript in `js/main.js` to handle document downloads:

```javascript
// The document cards already have click handlers
// Just ensure PDF files are in this folder with correct names
```

## Document Organization

Consider creating subfolders if you have many documents:

```
documents/
├── guides/
│   ├── guide-acheteur-immobilier.pdf
│   └── guide-succession.pdf
├── formulaires/
│   ├── formulaire-contact.pdf
│   └── demande-document.pdf
└── tarifs/
    └── grille-tarifaire-2024.pdf
```

## Legal Considerations

### Required Content
- Copyright notice
- Date of last update
- Disclaimer (if applicable)
- Contact information

### Privacy
- Don't include client names or personal data in public documents
- Ensure RGPD compliance for any data collection forms

### Professional Responsibility
- Ensure all legal information is current and accurate
- Have documents reviewed by a legal professional
- Include disclaimers where appropriate
- Update regularly to reflect law changes

## Maintenance

### Regular Tasks
- [ ] Review documents quarterly
- [ ] Update fee schedules annually
- [ ] Check for broken download links
- [ ] Update with law changes
- [ ] Remove outdated information
- [ ] Verify all PDFs open correctly
- [ ] Test downloads on mobile devices

## Current Status

📝 **To Do**: This folder is currently empty and ready for your documents.

Add your professional documents here to make them available to your clients through the website.

---

**Note**: Documents should be professionally created and reviewed before being made publicly available on your website.
