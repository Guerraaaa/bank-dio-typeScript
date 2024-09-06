import { Account } from "./Account";

// Para realizar uma herença deve conter:
//    class <ClasseFilha> 'extends' <ClassePai>,
//    definir no construtor todas as var da <ClassePai> e <ClasseFilha>

//    definir um super que irá receber somente as var da classePai
export class DepositBonus extends Account {
  deposit = ():number => {
    return this.setBalanceDeposit(10);
  };
}
