import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (): void => {
    if (this.validateStatus()) {
      const stringValue: string | null = prompt(
        "Informe o valor para depósito:"
      );

      if (stringValue !== null) {
        const depositAmount: number = parseFloat(stringValue);

        if (!isNaN(depositAmount)) {
          this.setBalance(this.getBalance() + depositAmount + 10);
          console.log("Você depositou:", depositAmount + 10);
        } else {
          console.log("Valor inválido para depósito.");
        }
      } else {
        console.log("Operação de depósito cancelada.");
      }
    }
  };
}
