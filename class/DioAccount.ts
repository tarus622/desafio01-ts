export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (depositAmount: number): void => {
    this.setBalance((this.balance += depositAmount));
    console.log("Você depositou:", depositAmount);
  };

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus()) {
      this.setBalance((this.balance -= withdrawAmount));
      console.log("Voce sacou: ", withdrawAmount);
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (x: number): void => {
    this.balance = x;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
