export interface Status {
  code: number;
  name: string;
}

export interface ActionCreate {
  claimsId: number | null;
  loanId: string;
  type: number;
  reminder: string;
  text: string;
}

export interface ActionsCredit {
  claimsId: number | null;
  loanId: string | undefined;
  keyword: string;
}

export interface Action {
  id: number;
  debtorId: number;
  type: number;
  reminder: string;
  text: string;
  createdBy: null;
  createdAt: string;
  updatedBy: null;
  updatedAt: string;
  user: {
    firstName: string;
    lastName: string;
    middleName: string;
    username: string;
    uuid: string;
  };
}
