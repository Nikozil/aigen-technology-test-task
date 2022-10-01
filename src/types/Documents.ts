export interface Document {
  id: string;
  name: string;
  date_start: string;
  date_end: string;
  description: string;
}

export type Documents = Document[];
