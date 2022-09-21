export type BranchResponse = {
  id: number;
  address: string;
  businessId: number;
};

export type SectionResponse = {
  id: number;
  name: string;
  description: string;
  branchId: number;
};
