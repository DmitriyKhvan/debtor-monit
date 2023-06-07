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
  claimsId: number | string | null;
  loanId: string | undefined;
  projectType: number | null;
  keyword: string;
}

export interface Action {
  id: number;
  debtorId: number;
  type: number;
  reminder: string;
  files: any[];
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

export interface ICalculationProducts {
  code: number | null;
  limit: number;
  table: ICalculationProduct[];
}

export interface ICalculationProduct {
  loanSum: number;
  period: number;
  productSum: string;
}

export interface maxAmountData {
  currentMaxAmount: string;
  date: string;
  diff: string;
  lastMaxAmount: string;
}

export interface StatisticsData {
  fromDate: string;
  toDate: string;
}
