import { Injectable } from '@angular/core';

export class PdfLink {
  public pdfName: string;
  public pdfLink: string;

  constructor(name: string, link: string) {
    this.pdfName = name;
    this.pdfLink = link;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private pdfs: PdfLink[];

  constructor() { 
    this.createPdfLinks();
  }

  /**
   * Generates the list of pdf names and links
   */
  createPdfLinks() {
    this.pdfs = [];
    this.pdfs.push(new PdfLink('Medical and Developmental History', '../../../assets/pdfs/Medical_and_Developmental_History_2016.pdf'));
    this.pdfs.push(new PdfLink('Client Information and Insurance', 
      '../../../assets/pdfs/Client_Information_and_Insurance_Intake_Form_2016.pdf'));
    this.pdfs.push(new PdfLink('Authorization to Request Information',
      '../../../assets/pdfs/Authorization_to_Request_Information_2016.pdf'));
    this.pdfs.push(new PdfLink('Financial Contract for Services', '../../../assets/pdfs/Financial_Contract_For_Services_2016.pdf'));
    this.pdfs.push(new PdfLink('Notice of Privacy Practices', '../../../assets/pdfs/Notice_of_Privacy_Practices_2016.pdf'));
    this.pdfs.push(new PdfLink('Privacy Acknowledgement', '../../../assets/pdfs/Privacy_Acknowledgement_2016.pdf'));
  }

  /**
   * Returns the list of pdf names/links to the caller.
   * @returns List of pdf name/link objects
   */
  getPdfs(): PdfLink[] {
    return this.pdfs;
  }
}
