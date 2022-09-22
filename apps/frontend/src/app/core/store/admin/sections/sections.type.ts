export type Section = {
  id: number;
  name: string;
  description: string;
  branchId: number;
};

export type NewSection = {
  name: string;
  description: string;
  branchId: number;
};

export type EditSection = {
  id: number;
  name: string;
  description: string;
};
