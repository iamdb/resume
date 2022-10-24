import type { Icon } from './icons'

export interface WorkExperience {
  name: string;
  startDate: Date;
  endDate: Date;
  stack: Icon[];
  accomplishments: string[];
  contract: boolean;
}
