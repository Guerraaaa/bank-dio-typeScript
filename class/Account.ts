// Essa classe, abstract, não pode ser instanciada por nenhum objeto, serve como um modelo que as demais classes irão herdar.
export abstract class Account {
  private name: string;
  private readonly accountNumber: number = 123;
  private balance: number;

  // Private para o usuario não conseguir mudar com um objeto.
  private status: boolean = true;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  setBalanceDeposit = (value: number): number => {
    return (this.balance = value + this.balance);
  };
  setBalanceWithDraw = (value: number): number => {
    return (this.balance = value - this.balance);
  };

  getBalance = () => {
    console.log(this.balance);
  };

  deposit = (value: number) => {
    // Apenas se o usuario estiver com o status true, vai poder depositar.
    if (this.validateStatus()) {
      console.log(
        "Voce depositou, o total da sua conta é: R$",
        this.balance + value
      );
      this.setBalanceDeposit(value);
    }
    new Error(
      "Sua conta está inativa no momento, fale com nosso suporte para mais informações"
    );
  };

  withdraw = (value: number) => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        console.log(
          "Voce sacou, o total da sua conta é: R$",
          this.balance - value
        );
        this.setBalanceWithDraw(value);
      } else {
        console.log(
          "O seu saque de: R$"+ Number(value) +", não foi permitido devido a falta de saldo p/ realizar tal operação..."
        );
      }
    } else
      new Error(
        "Sua conta está inativa no momento, fale com nosso suporte para mais informações"
      );
  };

  // Essa função é private porque vai ser uma validação INTERNA para cada função, não queremos que o usuario tenha acesso.
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inativa!");
  };
}
