class Bank {
  constructor(balance) {
    this.balance = balance
  }


  withdraw(amount) {
    //guard clause
    if (this.balance - amount <= 0) {
      console.log('cant go below 0')
      console.log({ balance: this.balance })
      return
    }
    this.balance -= amount
    console.log('withdraw', `$${amount}`)
    console.log({ balance: this.balance })

  }

  deposit(amount) {
    this.balance += amount
    console.log('deposited', `$${amount}`)
    console.log({ balance: this.balance })

  }


}

const tommyChecking = new Bank(100)
console.log(tommyChecking.balance)
tommyChecking.deposit(100)
tommyChecking.withdraw(100)
tommyChecking.withdraw(100)


const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = (document.getElementById('amount'))
const balanceDiv = document.getElementById('balance')


// onclick takes an annoymouse fucntion
depositButton.onclick = () => {
  const amount = (Number(amountInput.value))
  tommyChecking.deposit(amount)
  balanceDiv.innerText = `Balance: ${tommyChecking.balance}`

}

withdrawButton.onclick = () => {
  const amount = (Number(amountInput.value))
  tommyChecking.withdraw(amount)
  balanceDiv.innerText = `Balance: ${tommyChecking.balance}`
}
