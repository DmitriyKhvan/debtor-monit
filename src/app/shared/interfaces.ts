export interface Status {
  code: number;
  name: string;
}

export interface Activity {
  claimsId: number | null;
  loanId: string;
  type: number;
  reminder: string;
  text: string;
}
