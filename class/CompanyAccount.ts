import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loadAmount: number): void => {
    if (this.validateStatus()) {
      this.setBalance(loadAmount + this.getBalance());
      console.log("Voce pegou um empréstimo");
    }
  };
}
