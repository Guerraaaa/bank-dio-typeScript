// Aqui vamos criar nossos objetos
import { CompanyAccount } from "./class/CompanyAccount";
import { DepositBonus } from "./class/DepositBonus";
console.log("\n ########### \n");
console.group();
const user: CompanyAccount = new CompanyAccount("Mario", 100);
console.log('Metodo deposito')
user.deposit(100); // vai somar com o 100 que foi instanciado.
console.log('\n Metodo Sacar com um valor acima do que o saldo')
user.withdraw(300); // Vai gerar um erro, porque o balance é menor do que o valor solicitado.
console.log('\n Metodo Sacar com um valor menor do que o saldo')
user.withdraw(200); // Vai permitir pois é igual ao valor do balance com o deposito.
console.groupEnd();

console.log("\n ########### \n");

console.group("CompanyAccount");
const userCompany: CompanyAccount = new CompanyAccount("Dio", 1000);
console.log(" Metodo .getLoan()");
userCompany.getLoan(20000);
console.groupEnd();

console.log("\n ########### \n");

console.group("Deposito bonus");
const depositBonus: DepositBonus = new DepositBonus("Mario", 100);
console.log("Metodo de deposito bonus: " + depositBonus.deposit());
console.groupEnd();
console.log("\n ########### \n");
