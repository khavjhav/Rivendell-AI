import { contactSubmissions, type InsertContactSubmission, type ContactSubmission } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MockStorage implements IStorage {
  private submissions: ContactSubmission[] = [];
  private nextId = 1;

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: this.nextId++,
      ...contact,
      createdAt: new Date(),
    };
    this.submissions.push(submission);
    return submission;
  }
}

export const storage = new MockStorage();
