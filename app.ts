import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(10);
console.log(peopleAccount);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(10);
console.log(companyAccount);
