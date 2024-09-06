import { Account } from "./Account";

export class CompanyAccount extends Account {
  private statusCopany: boolean = true;

  constructor(name: string, balance: number) {
    super(name, balance);
  }

  getLoan = (value: number) => {
    if (this.validateStatusCompany()) {
      console.log("Voce pegou um emprestimo de R$:", value);
      console.log("O seu saldo foi atualizado p/ R$:", this.setBalanceDeposit(value));
      this.setBalanceDeposit(value);
    }
  };

  private validateStatusCompany = (): boolean => {
    if (this.statusCopany) {
      return this.statusCopany;
    }

    throw new Error("Conta inativa!");
  };
}
