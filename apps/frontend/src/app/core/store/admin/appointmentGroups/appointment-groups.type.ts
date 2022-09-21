import { Section } from '../sections/sections.type';

export type AppointmentGroup = {
  id: number;
  name: string;
  description: string;
  public: boolean;
  sectionId: number;
};
