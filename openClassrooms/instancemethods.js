class BankAccounts {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log('Balance: ' + this.balance + ' Tk');
    }
    deposit(amount) {
        console.log('Depositing :' + amount + ' Tk');
        this.balance += amount;
        this.showBalance();
    }

    withDraw(amount) {
        if (amount > this.balance) {
            console.log('Withdrawal Denied!!');
        } else {
            console.log('Withdrawing :' + amount + ' Tk');
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccounts('Sadiqur Rahman', 906000);

newAccount.deposit(94000);
newAccount.withDraw(250000);
