import type { Icon } from './icons'

export interface Job {
  name: string;
  startDate: Date;
  endDate: Date;
  stack: Icon[];
  accomplishments: string[];
  contract: boolean;
}

export interface Project {
   text: string;
   lead: false
}
